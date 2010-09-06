(function(window,document,$,undefined){
	
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
					$(this)[(/over|in/.test(e.type)?"add":"remove")+"Class"](v[1]);
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
			overflow:function(a,b){
				return a[0]<b[0]||a[1]>b[1]||a[2]>b[2]||a[3]<b[3];
			},
			fit:function(n,i,a){
				return Math.max(Math.min(n,a),i);
			},
			fn:function(){
				for(var m=0,a=arguments,x=a.length,n,f;m<x;m+=3){
					n=a[m];					
					f=(function(f){
						return function(){
							var
								l=arguments.callee,
								n=l.fn,
								d=$.defaults (n),
								a=l.arguments[0],
								b=a===void 0||$.isConfigObject(a);
							return this.each(function(i,o){
								o=$(o);
								i=o.currents(n);
								return f(o,o.currents(n,b?$.extend(true,{},d,o.defaults(n),a):i),i,n)!==false;
							});
						}
					})(a[m+1]);
					f.fn=n;
					$.fn[n]=f;
					$.defaults(n,$.extend({},a[m+2]));
				}
			}
		},
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

	$.fn.extend({
		visible:function(){
			with(this)return{
				d:css("display")!="none",
				v:css("visibility")!="hidden"
			};
		},
		transparent:function(b){
			return this.css({visibility:b?"hidden":"visible"});
		},
		rect:function(b){
			return _.rect(this,b);
		},
		overflow:function(o){
			return _.overflow(this.rect(-1),$($.isJqueryObject(o)?o:window).rect(-1));
		},
		moveTo:function(x,y,r,b){
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
				o.moveTo(
					u?r[3]+[-m,0,s((w-m)/2),w-m,w][x]+(p(a)||0):x,
					v?r[0]+[-n,0,s((h-n)/2),h-n,h][y]+(p(b)||0):y,
					t,
					-1
				);
			});
		},
		resize:function(o,w,h,a,b,t){
			o=$($.isJqueryObject(o)?o:window);
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
			return this[b?"prependTo":"appendTo"]($($.isJqueryObject(o)?o:"body")).pile(b?0:void 0);
		},
		pileBy:function(o,b){
			if($.isJqueryObject(o)){
				o=$(o);
				return this["insert"+(b?"Before":"After")](o).css("zIndex",o.css("zIndex"));
			}
		},
		defaults:function(n,v,b){
			var
				e=this,
				d="leko",
				o=(e.data()[d]=e.data(d)||{});
			d=o[n]||eval("({"+(e.attr(n)||"")+"})");
			return o[n]=$.isObject(v)?(!b?v:$.extend(!!(b+1),d,v)):d;
		},
		currents:function(n,v,b){
			var
				e=this,
				o=e.data(),
				d=o[n]||e.defaults(n,v,b);
			return o[n]=$.isObject(v)?(!b?v:$.extend(!!(b+1),d,v)):d;
		}
	});

	window.Leko=window._=_;
	$.ieHtml5Tags();

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

})(window,window.document,jQuery);