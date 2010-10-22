(function(window,document,$){
	
	$.each(["String","Number","Object","Date","Boolean"],function(i,v){
		$["is"+v]=new Function("v","return v==v&&v!==null&&v!==void(0)&&v.constructor=="+v);
	});

	$.extend({
		ieHtml5Tags:function(){
			if(_.msie(9,1)){
				$.each("article,aside,audio,canvas,datalist,details,figure,footer,header,hgroup,mark,meter,nav,output,progress,section,summary,time,video".split(','),function(i,v){
					document.createElement(v);
				});
			}
		},
		
		/*placeholder,,required,autofocus,pattern,input type=range,input type=email*/

		iePseudoClasses:function(){
			var
				a=document.styleSheets,
				x=[],
				u=["focus","hover"],
				y=[/:(focus|active)/,/:hover/],
				v=["focusin focusout","mouseenter mouseleave"],
				j=_.msie(7)?1:2,
				l,z,b,c,d,e,f,g,h,k,m,n,i;
			if(_.msie(8,1))for(b=0;b<a.length;b++){
				k=a[b];
				c=k.rules;
				d=c.length;
				while(d--){
					l=j;
					while(l--){
						p=u[l];
						t=v[l];
						z=y[l];
						e=c[d];
						f=e.selectorText;
						g=e.style.cssText;
						if(z.test(f)){
							h=(f+" ").split(z);
							m=h[0];
							if(!/\ba|area\b/i.test(m)){
								n=/\.([\w\-]+)$/.exec(m);
								n=(n?"-":".")+p;
								i=RegExp.$1;
								i+=i?n:p;
								n=h.join(n);
								k.addRule(n,g,d);
								x.unshift([m,i,t]);
							}
						}
					}
				}
			}
			if(x.length)$.each(x,function(i,v){
				$(v[0]).live(v[2],function(e){
					$(this)[(/(?:er|in)$/.test(e.type)?"add":"remove")+"Class"](v[1]);
				});
			});		
		},		
		isJqueryObject:function(v){
			try{
				v=$(v);
				if(v.length){
					v=v.width();
					if(v==v)return true;
				}
			}
			catch(o){};
			return false;
		},
		isConfigObject:function(v){
			if($.isObject(v)&&!v.jquery)for(var i in v)return true;
			return false;
		},
		defaults:function(n,v,b){
			var
				o=$.leko,
				d=o[n]||{};
			return o[n]=$.isObject(v)?(!b?v:$.extend(!!(b+1),d,v)):d;
		},
		effect:function(n,m){
			var
				o=_.effects,
				d=(o[n]=o[n]||{}),
				r=$.isString(m)?d[m]:m;
			if($.isFunction(r)) r.fn=m;
			return r;
		},
		leko:{}		
	});

	var
		_$=window._,
		_={
			noConflict:function(){
				window._=_$;
				return this;
			},
			ver:function(a,b){
				a=String(a||0).split('.');
				b=String(b||0).split('.');
				for(var c,i=0,x=Math.max(a.length,b.length);i<x;i++){
					c=(parseInt(a[i])||0)-(parseInt(b[i])||0);
					if(c)return c>0;
				}
				return true;
			},
			unique:function(a){
				var
					n,
					x={},
					i=a.length;
				while(i--)if(x[n=a[i]])a.splice(i,1);else x[n]=1;
				return a;
			},
			average:function(){
				var
					v=arguments,
					i=v.length,
					n=i,
					m=0;
				while(i--)m+=v[i];
				return m/n;
			},
			rect:function(v,b){
				var
					o=Number,
					p=o.MAX_VALUE,
					q=o.MIN_VALUE,
					r=[-q,p,p,-q],
					f=parseInt,
					i,n,m,x,y;
				if($.isArray(v)){
					i=v.length;
					while(i--)if((n=f(v[i]))==n)r[i]=n;
				}
				else if($.isJqueryObject(v)){
					o=$(v);
					v=o[0];
					p=v==window;
					q=v==document;
					m=p||q;
					q=q||!b;
					if(!m)n=o[b>0?"position":"offset"]();
					y=p?o.scrollTop() :q?0: n.top;
					x=p?o.scrollLeft():q?0:n.left;
					r=[y,x+o[m?"width":"outerWidth"](),y+o[m?"height":"outerHeight"](),x];
				}
				else if($.isConfigObject(v)){
					x=f(v.pageX);
					y=f(v.pageY);
					if(x==x&&y==y)r=[y,x,y,x];
					else $.each(["top","right","bottom","left"],function(i,d){
						if((d=f(v[d]))==d)r[i]=d;					
					});
				}
				return r;
			},
			rgba:function(v){		
				var
					a,b,r,i;
				if($.isArray(v))a=v;
				else if($.isString(v)){
					v=v.toLowerCase().replace(/\s/g,"");			
					if(/^#/.test(v)){
						a=[];
						b=v.length>4;
						r=new RegExp("\\w{"+(b+1)+"}","g");
						while(i=r.exec(v))a.push(parseInt(b?i:i+i,16));
					}
					else if(i=/^(rgb|hsl)a?\(([^\)]+)\)/.exec(v)){
						r=RegExp;
						a=r.$2.split(",");
						b=r.$1=="rgb";
						i=a.length;
						while(i--){
							r=a[i];
							a[i]=(/%$/.test(r)?(b?2.55:0.01):1)*parseFloat(r);
						}
						if(!b){
							var
								h=a[0]/360,
								s=a[1],
								l=a[2],
								q,p;
							if(!s)a[0]=a[1]=a[2]=l*255;
							else{
								q=l<0.5?l*(1+s):l+s-l*s;
								p=2*l-q;	
								$.each([h+1/3,h,h-1/3],function(i,v){
									if(v<0)v++;
									if(v>1)v--;
									a[i]=255*(6*v<1?p+(q-p)*v*6:2*v<1?q:3*v<2?p+(q-p)*(2/3-v)*6:p);
								});					
							}
						}
					}
					else a=_.constants.colorNames[v];
				}
				if(a&&a.length){
					for(i=0;i<4;i++){
						b=i==3;
						r=a[i];
						a[i]=_.fit(b?(r||1).toFixed(2):Math.round(r),0,b?1:255);
					}
					return a;
				}
			},
			constants:{
				blankImage:'blank.gif',
				colorProps:['color','backgroundColor','borderColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','outlineColor'],
				colorNames:{
					aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]
				}
			},
			color:function(v){
				v=v&&_.rgba(v);
				if(v&&v.length){
					var
						i=0,
						b=$.support.rgba,
						n=b?4:3,
						x="rgb";
					if(b)x+="a";
					for(;i<n;i++)x+=(i?",":"(")+v[i];
					return x+")";
				}
			},
			solidColor:function(e,a){
				var
					r;
				if($.isNumber(a))a=_.constants.colorProps[a];
				do{
					r=$.curCSS(e,a);
					if(r&&r!="transparent"||$.nodeName(e,"body")&&(r=[255,255,255,0]))break;
					a='backgroundColor';
				}
				while(e=e.parentNode);				
				return r;
			},
			overflow:function(a,b){
				return a[0]<b[0]||a[1]>b[1]||a[2]>b[2]||a[3]<b[3];
			},
			fit:function(n,i,a){
				return Math.max(Math.min(n,a),i);
			},
			fn:function(){
				for(var m=0,a=arguments,x=a.length,n,f;m<x;m+=4){
					n=a[m];					
					f=(function(f){
						return function(a,v,b){
							var
								l=arguments.callee,
								n=l.fn,
								d=$.defaults(n),
								c=a===void 0||$.isConfigObject(a);
							return this.each(function(i,o){
								o=$(o);
								i=o.currents(n);
								if(c){
									var
										x=$.extend(true,{},d,a,o.defaults(n)),
										z=x.fn;
									if(z)x=$.extend(true,{},d,$.defaults(z),a,o.defaults(n));
								}
								if(c||i)return f(o,o.currents(n,c?x:$.extend(!b,i,v,{disabled:!a})),o.runtimes(n),n)!==false;
							});
						}
					})(a[m+1]);
					f.fn=n;
					$.fn[n]=f;
					_.effects[n]=a[m+3];
					$.defaults(n,$.extend({},a[m+2]));
				}
			},
			effects:{}
		};
	
	(function(){

		var
			B=$.browser,
			S=$.support,
			D;
		$.each(["webkit","opera","msie","mozilla"],function(i,v){
			_[v]=function(n,m){
				return !!(B[v]&&_.ver(B.version,n)!=(m||0));
			}
		});

		S.rgba=_.msie(9)||_.mozilla(1.9)||_.webkit(525)||_.opera(10);
		D=_.msie(9)&&1||_.mozilla("1.9.1")&&2||_.webkit(522)&&3||_.opera(10.5)&&1;
		S.shadow=D&&["b","MozB","WebkitB"][D-1]+"oxShadow";
	
	})();

	window.Leko=window._=_;
	$.ieHtml5Tags();

	$.fn.extend({
		play:function(d,t,e,f){
			var
				i,
				m,
				o,
				n=3,
				v={},
				a="animate",
				b=$.isObject(d),
				x=_.constants.colorProps;
			if(b){
				for(i in d){
					m=d[i];
					if(i==x[2])while(n<7)v[x[n++]]=m;
					else v[i=="background"?x[1]:i]=m;					
				}
			}
			else if($.isFunction(d))f=d;
			return this.each(function(x,p){
				o=$(p);
				x=o.currents(a);				
				if(!x){
					if(!b)return;
					x={
						v:{},
						w:{},
						t:t,
						e:e					
					};
					for(i in v){
						m=o.css(i);
						x.w[i]=m;
						x.v[i]=/color/i.test(i)?_.color(_.solidColor(p,i)):m;
					}					
					x=o.currents(a,x);
				}
				o.animate(b?v:x.v,t||x.t,e||x.e,b?f:function(){
					for(var i in x.w)o.css(i,x.w[i]);
					o.removeData(a);
					if(f)f();
				});
			});
		},
		defaults:function(n,v,b){
			var
				e=this,
				d="leko",
				o=(e.data()[d]=e.data(d)||{});
			d=o[n]||eval("({"+(e.attr(n)||"")+"})");
			return o[n]=$.isObject(v)?(!b?v:$.extend(!!(b+1),d,v)):d;
		},
		runtimes:function(n){
			var
				e=this,
				d="suyu",
				o=(e.data()[d]=e.data(d)||{});
			return(o[n]=o[n]||{});
		},
		currents:function(n,v,b){
			var
				e=this,
				o=e.data(),
				d=o[n];
			return o[n]=$.isObject(v)?(!b?v:$.extend(!!(b+1),d,v)):d;
		},
		elements:function(){
			var
				x=this.map(function(i,e){
					if($.isJqueryObject(e))return e;
				});
			if(x.length)return x;
		},
		visible:function(){
			return this.css("display")!="none";
		},
		solid:function(){
			return this.css("visibility")!="hidden";
		},
		appear:function(b){
			return this.css("visibility",b?"visible":"hidden");
		},
		rect:function(b){
			return _.rect(this,b);
		},
		overflow:function(o){
			return _.overflow(this.rect(-1),$(o||window).rect(-1));
		},
		moveTo:function(x,y,r,b){
			b=b||!!b;
			r=_.rect(r);
			x=parseInt(x);
			y=parseInt(y);
			return this.each(function(i,o){
				var
					d={},
					e=$(window);
				o=$(o);
				if(x==x){
					x=_.fit(b<1?x:x+e.scrollLeft(),r[3],r[1]- o.outerWidth());
					d.left=b?x:x+"px";
				}
				if(y==y){
					y=_.fit(b<1?y:y+e.scrollTop() ,r[0],r[2]-o.outerHeight());
					d.top =b?y:y+"px";
				}
				o[b?"offset":"css"](d);
			});
		},
		resizeTo:function(w,h,r,b){
			b=b||!!b;
			r=_.rect(r);
			w=parseInt(w);
			h=parseInt(h);
			return this.each(function(i,o){
				o=$(o);
				i=o.rect();
				if(w==w)o.width (function(n,x){
					n=x-i[1];
					return Math.max(n+_.fit(b?w-n:w,r[3],r[1]),1);
				});
				if(h==h)o.height(function(n,x){
					n=x-i[2];
					return Math.max(n+_.fit(b?h-n:h,r[0],r[2]),1);
				});
			});
		},
		moveBy:function(x,y,r){
			return this.each(function(i,o){
				o=$(o);
				i=o.rect(1);
				o.moveTo(i[3]+parseInt(x),    i[0]+parseInt(y),r);
			});
		},
		resizeBy:function(w,h,r){
			return this.each(function(i,o){
				o=$(o);
				i=o.rect();
				o.resizeTo(i[1]+parseInt(w),  i[2]+parseInt(h),r);
			});
		},
		move:function(o,x,y,a,b,t){
			o=o||window;
			var
				r=_.rect(o,-1),
				w=r[1]-r[3],
				h=r[2]-r[0],
				m,n,u,v,
				g=0,
				q=4,
				p=parseInt,
				s=Math.round;
			x=p(x===void(0)?1:x);
			y=p(y===void(0)?4:y);
			u=x==x;
			v=y==y;
			if($.isJqueryObject(o)){
				o=$(o)[0];
				if(o==window||o==document){
					g=1;
					q=3;
				}
			}
			if(u)x=_.fit(x,g,q);
			if(v)y=_.fit(y,g,q);
			return this.each(function(i,o){
				o=$(o);
				i=o.rect();
				m=i[1]-i[3];
				n=i[2]-i[0];
				o.moveTo(0,0).moveTo(
					u?r[3]+[-m,0,s((w-m)/2),w-m,w][x]+(p(a)||0):x,
					v?r[0]+[-n,0,s((h-n)/2),h-n,h][y]+(p(b)||0):y,
					t,
					-1
				);
			});
		},
		resize:function(o,w,h,a,b,t){
			o=$(o||window);
			var
				p=parseInt;
			w=p(w===void(0)?2:w);
			h=p(h===void(0)?2:h);
			p=o[0]==window||o[0]==document;
			if(w==w)w=o[["w","innerW","outerW"][p?0:_.fit(w,0,2)]+ "idth"]();
			if(h==h)h=o[["h","innerH","outerH"][p?0:_.fit(h,0,2)]+"eight"]();
			return this.each(function(i,o){
				$(o).resizeTo(w,h).resizeBy(a,b,t);
			});
		},
		pile:function(b){
			var
				o=this,
				m=Math,
				a="zIndex",
				e=o.offsetParent(),
				z=e.data(a);
			if($.isNumber(b))z=b;
			else e.data(a,z=(b===true||z===null?m.max.apply(m,$.map($("*",e),function(o){
				return parseInt($(o).css(a))||0;
			})):z)+1);
			return this.css(a,z);
		},
		pileTo:function(o,b){
			return this[b?"prependTo":"appendTo"]($(o||"body")).pile(b?0:void 0);
		},
		pileBy:function(o,b){
			return this["insert"+(b?"Before":"After")]($(o)).css("zIndex",o.css("zIndex"));
		},
		msFilter:function(v){
			var
				x=this;
			if(_.msie())x.each(function(i,o){
				var
					e=$(o),
					f={},
					a="",
					n,m,c,d,t,
					r=/\b(\w+)\(([^\)]*)\)/ig;
				while(n=r.exec(e.css("filter"))){
					d={};
					c=n[2].split(/[\s\'\"]*\,[\s\'\"]*/);
					m=c.length;
					while(m--){
						t=c[m].split("=");
						d[t[0]]=t[1];
					}
					f[n[1].toLowerCase()]=d;
				}
				if(v){
					m={};
					for(n in v)m[n.toLowerCase()]=v[n];
					f=$.extend(f,m);
					for(n in f){
						a+=a?", ":" ";
						a+="progid:DXImageTransform.Microsoft."+n+"(";
						d=f[n];
						t="";
						for(m in d)t+=(t?",":"")+m+"="+d[m];					
						a+=t+")";
					}
					e.css("filter",a);
				}
				else{
					x=f;
					return false;
				}
			});
			return x;
		},
		iframe:function(){
			return _.msie(7,1)?this.each(function(i,o){
				o=$(o);
				i=$("<iframe frameborder='0' hspace='0' src=''></iframe>").css({
					zIndex:-1,
					position:"absolute"
				}).insertBefore(o).resize(o).move(o,1,1);
			}):this;
		},
		png:function(){
			return _.msie(7,1)?this.each(function(i,o){
				var
					e=$(o),
					h=o.src,
					a="backgroundImage",
					k=e.css(a),
					r=/\.png/i,
					b=h&&r.test(h),
					d=k&&r.test(k);
				if(b||d){
					if(!e.is("img")||o.complete){
						r=b?h:k.split(/[\(\)\"\']+/)[1];
						if(d)e.css(a,"none");
						else e.resize(e).attr("src",_.constants.blankImage);
						e.msFilter({
							AlphaImageLoader:{
								src:"'"+r+"'",
								sizingMethod:"'crop'"
							}
						});
					}
					else e.load(function(){
						$(this).png();
					});
				}			
			}):this;
		}
	});

	$.each(_.constants.colorProps,function(i,v){
		$.fx.step[v]=function(fx){
			if(fx.state==0){
				fx.start=_.rgba(_.solidColor(fx.elem,v));
				fx.end=_.rgba(fx.end);
				//console.log(fx.start);console.log(fx.end);
			}
			fx.elem.style[v]=_.color($.map(fx.start,function(v,i){
					return fx.pos*(fx.end[i]-v)+v;
			}));
		}
		$.fn[v+"To"]=function(c,d,e,f){
			var
				o={};
			o[v]=c;
			return this.animate(o,d||800,e,f);
		}
	});

	(function(){

		var
			m=Math,
			C=m.cos,
			W=m.pow,
			S=m.sin,
			A=m.abs,
			I=m.PI,
			N=m.asin,
			Q=m.sqrt,
			e=$.easing,
			f=function(i){
				return function(x,t,b,c,d){
					var
						s=1.70158,
						p=0,
						a=c,
						v=-1;
					switch(i){
						case 0 :return c*(t/=d)*t+b;
						case 1 :return -c*(t/=d)*(t-2)+b;
						case 2 :return (t/=d/2)<1?c/2*t*t+b:-c/2*((--t)*(t-2)-1)+b;
						case 3 :return c*(t/=d)*t*t+b;
						case 4 :return c*((t=t/d-1)*t*t+1)+b;
						case 5 :return (t/=d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b;
						case 6 :return c*(t/=d)*t*t*t+b;
						case 7 :return -c*((t=t/d-1)*t*t*t-1)+b;
						case 8 :return (t/=d/2)<1?c/2*t*t*t*t+b:-c/2*((t-=2)*t*t*t-2)+b;
						case 9 :return c*(t/=d)*t*t*t*t+b;
						case 10:return c*((t=t/d-1)*t*t*t*t+1)+b;
						case 11:return (t/=d/2)<1?c/2*t*t*t*t*t+b:c/2*((t-=2)*t*t*t*t+2)+b;
						case 12:return -c*C(t/d*(I/2))+c+b;
						case 13:return c*S(t/d*(I/2))+b;
						case 14:return -c/2*(C(I*t/d)-1)+b;
						case 15:return t==0?b:c*W(2,10*(t/d-1))+b;
						case 16:return t==d?b+c:c*(-W(2,-10*t/d)+1)+b;
						case 17:return t==0?b:t==d?b+c:(t/=d/2)<1?c/2*W(2,10*(t-1))+b:c/2*(-W(2,-10*--t)+2)+b;
						case 18:return -c*(Q(1-(t/=d)*t)-1)+b;
						case 19:return c*Q(1-(t=t/d-1)*t)+b;
						case 20:return (t/=d/2)<1?-c/2*(Q(1-t*t)-1)+b:c/2*(Q(1-(t-=2)*t)+1)+b;
						case 21:v++;
						case 22:v++;
							if(!t)return b;
							if((t/=d)==1)return b+c;
							if(!p)p=d*.3;
							if(a<A(c)){
								a=c;
								s=p/4;
							}
							else s=p/(2*I)*N(c/a);
							return v?a*W(2,-10*t)*S((t*d-s)*(2*I)/p)+c+b:-(a*W(2,10*(t-=1))*S((t*d-s)*(2*I)/p))+b;
						case 23:
							if(!t)return b;
							if((t/=d/2)==2)return b+c;
							if(!p)p=d*.3*1.5;
							if(a<A(c)){
								a=c;
								s=p/4;
							}
							else s=p/(2*I)*N(c/a);
							return t<1?-.5*(a*W(2,10*(t-=1))*S((t*d-s)*(2*I)/p))+b:a*W(2,-10*(t-=1))*S((t*d-s)*(2*I)/p)*.5+c+b;
						case 24:return c*(t/=d)*t*((s+1)*t-s)+b;
						case 25:return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
						case 26:return (t/=d/2)<1?c/2*(t*t*(((s*=(1.525))+1)*t-s))+b:c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
						case 27:return c-e.outbounce(x,d-t,0,c,d)+b;
						case 28:return (t/=d)<(1/2.75)?c*(7.5625*t*t)+b:t<(2/2.75)?c*(7.5625*(t-=(1.5/2.75))*t+.75)+b:t<(2.5/2.75)?c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b:c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
						case 29:return t<d/2?e.inbounce(x,t*2,0,c,d)*.5+b:e.outbounce(x,t*2-d,0,c,d)*.5+c*.5+b;
					}
				}
			};

		$.each([
			"inquad",
			"outquad",
			"inoutquad",
			"incubic",
			"outcubic",
			"inoutcubic",
			"inquart",
			"outquart",
			"inoutquart",
			"inquint",
			"outquint",
			"inoutquint",
			"insine",
			"outsine",
			"inoutsine",
			"inexpo",
			"outexpo",
			"inoutexpo",
			"incirc",
			"outcirc",
			"inoutcirc",
			"inelastic",
			"outelastic",
			"inoutelastic",
			"inback",
			"outback",
			"inoutback",
			"inbounce",
			"outbounce",
			"inoutbounce"
		],function(i,v){
			e[v]=f(i);
		});

	})();

	$("a,area").live("click",function(e){
		if($(this).attr("href")=="#")return !!e.preventDefault();		
	});

	_.fn(
		"shadow",
		function(o,v,d){
			var
				b=$.support.shadow,
				l=v.disabled||!o.visible(),
				g=_.rgba(v.color),
				a=g[3],
				x=v.x,
				y=v.y,
				e=d.src,
				j=v.src,
				r=v.blur,
				q="position",
				k="relative",
				p;
			g=_.color(g);
			if(b&&!j)o.css(b,l?"none":x+"px "+y+"px "+r+"px "+g);
			else{
				o.css(q,function(i,v){
					return p=v=="static"?k:v;
				});
				if(!e)e=(d.src=j?$(j):$("<div>&nbsp;</div>").css({
					border :0,
					margin :0,
					padding:0,
					outline:0,
					float:"none",
					left:0,
					top:0
				}));
				e.appear(o.solid()).toggle(!l);
				if(!l){
					if(!j)e.css(q,p==k?"absolute":p).resize(o);
					e.css({
						backgroundColor:g,
						opacity:a
					}).msFilter({
						Blur:{
							pixelradius:r
						}
					}).pileBy(o,1).move(o,1,1,j?x:x-r+(!r||!x?0:x>0?-1:1),j?y:y-r+(!r||!x?0:y>0?-1:1));
				}
			}
		},
		{
			x:2,
			y:2,
			blur:3,
			color:[0,0,0,0.3]
		},
		{},
		"popup",
		function(o,v,d,n){
			var
				m=$(v.menu),
				x="mouseenter",
				y="mouseleave",
				z=x+" "+y;
			if(m[0])m.add(o).unbind(z,d.f).bind(z,d.f=function(e){
				d.$=/er$/.test(e.type);
				window.clearTimeout(d._);
				if(d.$){
					m.show().move(o,1,1,v.offx||0,v.offy||0);
					$(".iframe",m).iframe();
				}
				else d._=window.setTimeout(function(){
					if(!d.$)m.hide();
				},100);
			});
		},
		{},
		{}
	);

})(window,window.document,jQuery);

(function(_,$){

	var
		N="list",
		L="li",
		D="deco",
		U="."+D,
		P=["nav","tab"],
		C=[{
			speed:1000,
			fx:"outback"
		}],
		W=["check","hover","focus"],
		R=/(?:er|in|us)$/i,
		X=[],
		Y=[],
		Z=[],
		I=W.length,
		T,
		K=function(e,v){
			return(e[0]&&e||$("<"+v.l+" />").append("<a href='#'>&nbsp;</a>")).addClass(D).css({
				float:"none",
				position:"absolute"
			}).show();		
		},
		G=function(e,v,c){
			var
				a="position",
				p=e.css(a,function(i,v){
					return v=="static"?"relative":v;
				})[a](),
				i=v.inner,
				h=v.vertical;
			return{
				top  :p.top,
				left :p.left,
				width :(!h&&i?c.$:e).width(),
				height:( h&&i?c.$:e).height()
			};
		},
		A=["Width","Height"];

	while(I--){
		T=W[I];
		Z[I]="on"+T;
		X[I]="."+(Y[I]=T+"ed");
	};

	I=["click","mouseleave","mouseenter","focusin","focusout"];
	W=I.concat(["mouseout","mouseover","focus","blur"]);
	T=I.join(" ");

	$.each(P,function(i,n){
		$.defaults(n,C[i]);
		$.fn[n]=function(v){
			return this[N]($.extend(true,v,{fn:n}));
		}
	});

	_.fn(
		"listlink",
		function(o,v,d,n){
			var
				t=$(v.linkTo),
				f;
			if(t[0]){
				f=function(i,e){
					var
						x=$(e.defaults("lilink").linkTo);
					t.runtimes(N)[0](x[0]||i);
				}
				o.currents(N).oncheck=f;
				f(0,o.children(".checked"));
			}
		},
		{},
		{},
		N,
		function(o,v,d,n){
			var
				l=(v.l=v.live||L),
				i=P.length,
				a=v.fn,
				m,
				r=$(v.carousel),
				j=l+":not("+U+")",
				k=!!v.vertical+0,
				t=$(v.link),
				w,rev,fwd,tmp,att;
			while(i--)v[i]=v.fn==P[i];
			if(r[0]){
				att="outer"+A[k];
				w=o.children(j)[att]();
				d.r=function(b){
					o.stop(true,true);
					var
						a=k?"top":"left",
						x=o.position()[a],
						q={};
					q[a]=(b?"+":"-")+"="+w;
					if(!b&&x<0)o.append(o.children(j).first()).css(a,x+w+"px");
					if(b&&(x+o[att]())>r[att]())o.prepend(o.children(j).last()).css(a,x-w+"px");
					
					o.animate(q,v.carouselSpeed,v.carouselFx);
				}
				rev=$(v.rev);
				fwd=$(v.fwd);
				tmp=o[att]()<=r[att]();				
				rev.add(fwd).toggleClass("disabled",tmp).unbind("click",d.rol).bind("click",d.rol=tmp?$.noop:function(e){
					d.r(this==fwd[0]);
				}).unbind("mouseenter mouseleave",d.rok).bind("mouseenter mouseleave",d.rok=tmp?$.noop:function(e){
					$(this).toggleClass("hovered",/er$/.test(e.type));
				});
			}
			if(v[1])v.effect=v.effect||"tabs";
			i=X.length;
			while(i--){
				d[i]=(function(i){
					return function(s){
						var
							m,
							e,
							b,
							r=$(),
							x=X[i],
							y=Y[i],
							z=v[Z[i]],
							c=o.children(j),
							h=v.effect;
						if(h)h=$.map($.makeArray(h),function(h){
							return ((($.effect(n,h)||$.noop)(o,v,d,n))||{})[i];
						});
						if(s===void 0||$.isString(s))r=c.filter(s=="all"?"*":(s=="inverse"?":not("+x+")":x));
						else{
							s=[].concat(s);
							m=s.length;
							while(m--){
								e=s[m];
								r=r.add($.isNumber(e)?c.eq(e):e);
							}
						}
						r=r.slice(0,Math.min(r.length,i||v[0]?1:(v.maxLength||1)));
						
						c.each(function(m,e){
							e=$(e);
							b=!!(r.index(e)+1);
							if(h)$.each(h,function(l,h){
								h(e,b,e.currents(L,$.extend(true,{$:$(":first-child",e)},v,e.defaults(L))),e.runtimes(L));
							});
							if(b&&z&&b!=e.hasClass(y))z.call(o,m,e);							
							e.toggleClass(y,b);
						});

						d[y]=r.length&&r;						
					};
				})(i);
				m=v[Y[i]];
				if(v[1]&&!i&&m===void 0){
					m=$(l+X[0],o);
					if(!m.length) m=0;
				}
				if(m!==void 0)d[i](m);		
			}
			d[1]($(l+X[0],o));
			if(v[0])o.undelegate(l,T,d.f).delegate(l,T,d.f=function(e){
				var
					t=e.type,
					i=W.length,
					x=$(this),
					s=$(l+X[0],o),
					b;
				while(i--)if(W[i]==t)break;
				b=(i==1||i==2||i==5||i==6)?1:(i==3||i==4||i==7||i==8)?2:0;
				if(b)d[b](R.test(t)?x:s);
				if(!b||b==(v.event||0))d[0](x);				
			});
		},
		{
		},
		{
			tabs:function(o,v,d,n){
				return{
					0:function(e,b,c,r){
						e.toggle(b);
					}
				};
			},
			fade:function(o,v,d,n){
				return{
					0:function(e,b,c,r){
						if(b&&!r.b)e.hide().appendTo(o).fadeIn(c.speed,c.fx);
						r.b=b;
					}
				};
			},
			lamp:function(o,v,d,n){
				return{
					1:function(e,b,c,r){
						c.$.stop().play(b?c.lamp:null,c.speed,c.fx);
					}
				};
			},
			lava:function(o,v,d,n){
				return{
					1:function(e,b,c,r){
						if(b)d.b=(d.b||K($(U,o),v).prependTo(o)).stop().play($.extend(G(e,v,c),c.lava),c.speed,c.fx);
					}
				};
			},
			lace:function(o,v,d,n){
				return{
					1:function(e,b,c,r){
						r.b=(r.b||K(e.prev(U),v).css(G(e,v,c)).insertBefore(e)).stop().play(b?c.lace:null,c.speed,c.fx);
					}
				};
			}
		}
	);

})(Leko,jQuery);

$(function(){

	var
		a=$(".nav"),
		b=$(".tab");
	
	a.nav();
	b.tab();
	a.add(b).listlink();

	$(".png").png();
	$("#top_nav>li:not(.deco),.popup").popup();

});

//if(!_.mozilla())document.write('<script src="firebug-lite.js#startOpened"></'+'script>');