
(function($,window){
	
	$.each(["String","Number","Object","Date","Boolean"],function(i,v){
		$["is"+v]=new Function("v","return v==v&&v!==null&&v!==void(0)&&v.constructor=="+v);
	});
	
	$.extend({
		/**
		* 将一个字符串传唤为浮点数。它会过滤掉所有非数字的字符，如果包含小数点，则仅保留第一个小数点
		* @param	{string}			[str]
		* 		要被转换的字符串
		* @param	{number}			[width]
		* 		将每一个小数点之后的数字通过前置补零的方式转换为多少位的有效数字。如果不提供此参数，则默认为每个数字段的实际位数
		* @return	{number}
		*/
		parseFloat:function(n,w){
			var
				d,
				l;
			return parseFloat(n.replace(/[^0-9\.]+/g,"").replace(/\.|\d+/g,function(a){
				if(a=="."){
					if(d)a="";else d=a;
				}
				else if(w){
					l=w-a.length;
					if(l>0)while(l--)a="0"+a;
				}				
				return a;	
			}));			
		}
	});
	
	(function(){
		
		var
			b=$.browser,
			s=$.support,
			e=b.msie,
			m=b.mozilla,
			w=b.webkit,
			o=b.opera,
			v=$.parseFloat(b.version);
		/**
		* 版本小于9的ie不能为不认识的HTML5 tag定义样式表
		*/
		s.html5Tag=!e||v>=9;
		/**
		* 版本小于8的ie的双倍padding问题
		*/
		s.doubleFloatPadding=e&&v<8;
		/**
		* 是否支持CSS3的rgba和hsla色彩定义
		*/
		s.css3Color=e&&v>=9||m&&v>=1.9||w&&v>=525||o&&v>=10;
		/**
		* 当元素的默认背景色为transparent时，在webkit内核上，jQuery目前版本的css()和curCSS()函数会获得错误的black值
		*/
		s.blackBackground=w;
		/**
		* 当元素的backgroundPosition为百分比值时，在ie上，jQuery目前版本的css()和curCSS()函数会获得错误的实数px值
		*/
		s.wrongBackgroundPosition=e&&v<9;
							
	})();
	
	var
		_=function(){},
		__,
		$$;	

	_.extend=function(i,s){
		var
			p,c,k,h,
			t=_.prototype.extend;
		_._prototyping=true;
		p=new this;
		t.call(p,i);
		p._=function(){};
		delete _._prototyping;
		c=p.constructor;
		k=p.constructor=function(){
			if(!_._prototyping){
				var
					a=arguments,
					b=a[0];
				if(this._constructing||this.constructor==k){
					this._constructing=true;
					c.apply(this,a);
					delete this._constructing;
				}
				else if(b!=null)return(b.extend||t).call(b,p);
			}
		};
		h=this;
		k.ancestor=h;
		k.extend=h.extend;
		k.forEach=h.forEach;
		k.implement=h.implement;
		k.prototype=p;
		k.toString=h.toString;
		k.valueOf=function(t){
			return(t=="object")?k:c.valueOf();
		};
		t.call(k,s);
		if($.isFunction(k.init))k.init();
		return k;
	};

	_.prototype={	
		extend:function(s,v){
			if(arguments.length>1){
				var
					a=this[s];
				if(a&&(typeof v=="function")&&(!a.valueOf||a.valueOf()!=v.valueOf())&&/\b(?:_|Leko)\b/.test(v)){
					var
						m=v.valueOf();
					v=function(){
						var
							r,
							p=this._||_.prototype._;
						this._=a;
						r=m.apply(this,arguments);
						this._=p;
						return r;
					};
					v.valueOf=function(t){
						return(t=="object")?v:m;
					};
					v.toString=_.toString;
				}
				this[s]=v;
			}
			else if(s){
				var
					k,
					e=_.prototype.extend,
					h=["constructor","toString","valueOf"],
					i=_._prototyping?0:1,
					p={};
				if(!_._prototyping&&!$.isFunction(this))e=this.extend||e;
				while(k=h[i++])if(s[k]!=p[k])e.call(this,k,s[k]);
				for(k in s)if(!p[k])e.call(this,k,s[k]);
			}
			return this;
		}
	};

	_=_.extend({
		constructor:function(){
			this.extend(arguments[0]);
		}
	},{
		ancestor:Object,
		forEach:function(o,b,c){
			for(var k in o)if(this.prototype[k]===void 0)b.call(c,o[k],k,o);
		},
		implement:function(){
			for(var i=0,a;i<arguments.length;i++){
				a=arguments[i];
				if($.isFunction(a))a(this.prototype);
				else this.prototype.extend(a);
			}
			return this;
		},
		toString:function(){
			return String(this.valueOf());
		}
	});
		
	/**
	* @classDescription		颜色类
	*/
	window.Color=_.extend({
		/**
		* @method
		* 公用方法。设置rgba属性值
		* @param	{string,number}	[attr]
		* 		"r",0		:	设置红色值
		* 		"g",1		:	设置绿色值
		* 		"b",2		:	设置蓝色值
		* 		"a",3		:	设置透明度
		* @param	{number}	[value]
		* 		要设置的颜色值。会接受范围校验
		*/
		setValue:function(n,v){
			if($.isNumber(n))n=Color.attrs[n];
			var
				b=n=="a";
			v=b?parseFloat(v):parseInt(v);
			b=b?1:255;
			this[n]=Math.max(0,Math.min(b,isNaN(v)?b:v));
		},
		/**
		* @method
		* 公用方法。将当前的颜色定义以rgba()格式的样式表值返回
		* @return	{string}
		*/
		toString:function(){
			var
				c=this,
				b=$.support.css3Color?"a":"",
				r=[c.r,c.g,c.b];
			if(b)r.push(c.a);				
			return "rgb"+b+"("+r.join(",")+")";
		},
		constructor:function(v,e){
			var
				c=this,
				a,b,r,i,h,s,l,q,p;
			if($.isString(v)){
				if(e){
					e=$(e)[0];
					do{
						v=$.css(e,v);
						if($.nodeName(e,"body")||v!=""&&v!="transparent")break;
						v="backgroundColor";
					}
					while(e=e.parentNode);
				}
				v=(v||"").toLowerCase().replace(/\s/g,"");
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
						h=a[0]/360;
						s=a[1];
						l=a[2];
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
				else a=Color.names[v];
				a=a||[];
				b=Color.attrs;
				i=4;
				while(i--)c.setValue([b[i]],a[i]);
			}
			else c.extend(v);
		}
	},{
		/**
		* @property {array}
		* 只读。包含样式表各颜色属性名称
		*/
		props:['color','backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','outlineColor'],
		/**
		* @property {array}
		* 只读。包含各单色通道的字段名称
		*/	
		attrs:["r","g","b","a"],
		/**
		* @property {object}
		* 只读。包含CSS3所有预定义名称的色彩值的键值对
		*/		
		names:{
			aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]
		}
	});

	/**
	* @classDescription		矩形类
	*/
	window.Rect=_.extend({
		/**
		* @method
		* 公用方法。设置rect属性值
		* @param	{string,number}	[attr]
		* 		"r",0		:	设置红色值
		* 		"g",1		:	设置绿色值
		* 		"b",2		:	设置蓝色值
		* 		"a",3		:	设置透明度
		* @param	{number}	[value]
		* 		要设置的长度值
		*/
		setValue:function(n,v){
			n=$.isNumber(n)?Rect.attrs[n]:n;
			var
				c=this,
				r=parseInt(v),
				b=isNaN(r);
			c[n]=r;
			c[n+n]=(b?0:(""+v).replace(/[0-9\.]+/,""))||"px";
		},
		/**
		* @method
		* 公用方法。获取rect属性值
		* @param	{string,number}	[attr]
		* 		"r",0		:	设置红色值
		* 		"g",1		:	设置绿色值
		* 		"b",2		:	设置蓝色值
		* 		"a",3		:	设置透明度
		* @return	{string}
		* 		注意，此方法返回的是加上了单位的字符串值。如果要获取数字值，请直接读取相应字段
		*/
		getValue:function(n){
			n=$.isNumber(n)?Rect.attrs[n]:n;
			var
				c=this,
				r=c[n];
			return isNaN(r)?"auto":r+(c[n+n]||"px");
		},
		/**
		* @method
		* 公用方法。将当前的矩形定义以rect()格式的样式表值返回
		* @return	{string}
		*/
		toString:function(){			
			with(this){
				var
					c=[],
					i=4;
				while(i--)c[i]=getValue(i);
				return "rect("+c.join(" ")+")";
			}
		},
		/**
		* @method
		* 公用方法。获取当前矩形与另一个矩形的并集矩形
		* @param	{rect} ...	[rect]
		* @return	{rect}
		*/
		union:function(e){			
		},
		/**
		* @method
		* 公用方法。获取当前矩形与另一个矩形的差集矩形
		* @param	{rect} ...	[rect]
		* @return	{rect}
		*/
		Subtr:function(e){			
		},
		/**
		* @method
		* 公用方法。获取当前矩形与另一个矩形的交集矩形
		* @param	{rect,jquery}	[rect]
		* 		要与当前rect计算交集的rect，或者要获取rect的jquery选择符
		* @param	{number}			[rectType]
		* 		要传递给e.rec()的参数，获取哪一种rect
		* 		0			:	包含padding和borderWidth和margin
		* 		1*			:	包含padding和borderWidth	
		* 		2			:	包含padding
		* 		3			:	都不包含，即样式表值
		* 		4			:	style.clip	
		* @return	{rect}
		*/
		inter:function(e,x){
			var
				c=this,
				r=e.constructor==Rect?e:$(e).rec(x),
				f=["max","min","min","max"],
				i=4,
				n,
				a,
				b;
			while(i--){
				n=Rect.attrs[i];
				a=c[n];
				b=r[n];
				c.setValue(n,isNaN(a)?b:Math[f[i]](a,b));
			}
			return c;
		},
		constructor:function(v){
			var
				r=!v?[]:$.isString(v)?v.match(/auto|\d+[a-z]*/g)||[]:[v.t,v.r,v.b,v.l],
				i=4;
			while(i--)this.setValue(Rect.attrs[i],r[i]);
		}
	},{
		/**
		* @property {array}
		* 只读。包含样式表各clip属性名称
		*/
		props:["clipTop","clipRight","clipBottom","clipLeft","clip"],
		/**
		* @property {array}
		* 只读。包含各定位坐标的字段名称
		*/	
		attrs:["t","r","b","l"]
	});

	/**
	* 重载jquery的css()和style()方法
	*/			
	(function(){
		
		var
			h=$.css,
			f=$.style,
			l=function(d,e,n,v,x){
				if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;
				n=$.camelCase(n);
				var
					i,
					b=v===void 0,
					k=e.currentStyle,
					a,
					r;
				if((i=$.inArray(n,(a=Rect.props)))+1){
					if(!b&&i>3)r=v;
					else{
						r=h(e,a[4]);
						r=new Rect(r===void 0?{t:h(e,a[0]),r:h(e,a[1]),b:h(e,a[2]),l:h(e,a[3])}:r);						
						if(!b&&i<4)r.setValue(i,v);
						r=!b||i>3?r.toString():r.getValue(i);
					}
				}
				else if((i=$.inArray(n,(a=Color.props)))+1){
					r=b?(i==1&&$.support.blackBackground?e.style[n]:void 0):new Color(v).toString();
				}
				else if((i=$.inArray(n,(a=["backgroundPositionX","backgroundPositionY","backgroundPosition"])))+1){
					if($.isNumber(v))v+="px";
					var
						t=b?v:v.split(/\s/),
						g=$.support.wrongBackgroundPosition,
						z=(h(e,a[2])||(g?k[a[0]]:h(e,a[0]))+" "+(g?k[a[1]]:h(e,a[1]))).split(/\s/);
					if(!b){
						n=a[2];
						if(i!=1)z[0]=i==0?v:t[0];
						if(i!=0)z[1]=i==1?v:t[1];
					}
					t=2;
					r=b&&i<2?z[i]:z.join(" ");
				}
				b=r===void 0;
				return d?f(e,n,b?v:r,x):(b?h(e,n,x):r);								
			};

		$.style=function(e,n,v,x){
			return l(1,e,n,v,x);
		};
				
		$.css=function(e,n,x){			
			return l(0,e,n,void 0,x);
		};	

	})();		
	
	/**
	* @classDescription		所有UI组件的最初原型
	*/
	__=_.extend({
		/**
		* @property {object}
		* 只读。包含效果名称与效果对象的键值对。请务必使用lekoEffect向此字段注册效果，而不要直接操作此字段，否则可能引发意想不到的问题
		*/
		effects:{},
		/**
		* @method
		* 内部方法。提供给子类的构建器在合适的时机初始化应用到当前实例的效果
		*/
		initFX:function(){
			var
				n=this;
				e=n.fx;
			if(e)$.each($.isString(e)?e.split(/[,;]/):$.makeArray(e),function(i,f){
				i=$.isString(f)?n.effects[f]:{func:f};
				i&&i.func(n,n.$,n[f]=$.extend(true,{},i.conf,n[f]),f);
			});	
		},
		constructor:function(n,e){
			this.$=e;
			this.className=n;
			n="data-leko-"+n;
			this.extend(eval("({"+(e.attr(n)||"")+"})"));
			e.removeAttr(n);
		}
	});
	
	/**
	* Leko的核心对象，为所有抽象类和UI组件提供原型继承操作，并提供一系列功能性静态方法
	*/	
	window.Leko=window._=_;
	/**
	* 插件创建函数
	* @param	{string}	[className]
	* 		插件名称
	* @param	{object}	[class]
	* 		原型定义
	* @param	{undefined,string}	[baseClassName]
		指定父类名称。如果省略，则以__作为父类
	*/
	window.leko=function(n,c,m){
		$.fn[n]=function(v){
			var
				f=_[n].extend(v);
			return this.each(function(i,e){
				e=$(e);
				if(!e.data(n))e.data(n,new f(n,e));
			});	
		}
		_[n]=(_[m]||__).extend(c);
	};
	/**
	* 向插件注册效果
	* @param	{string}	[className]
	* 		要注册效果的插件名称
	* @param	{object}	[effects]
	* 		包含一个或多个效果名称与效果对象的键值对
	*/	
	window.lekoEffect=function(n,o){
		var
			l=n&&_[n]||__,
			a=l.prototype.effects;
		l.prototype.effects=$.extend(true,{},l.prototype.effects,o);
	};
	/**
	* 获取到对指定jQuery对象关联的某个Leko插件实例的引用。如果插件尚未在jQuery对象上初始化，则会先被自动初始化
	* @param	{jquery,element,string}	[target]
	* @param	{string}	[className]
	* 		插件名称
	* @return	{object}
	*/
	window.lekoPlugin=window.$$=$$=function(e,n){
		return $(e)[n]().data(n);
	};
	
	$.fn.extend({
		/**
		* 设置或获取当前第一个元素的各种高度宽度值
		* @param	{boolean,number}	[isHeight]
		* 		0|false*	:	操作宽度值
		* 		1|true		:	操作高度值
		* @param	{number}			[rectType]
		* 		0			:	包含padding和borderWidth和margin
		* 		1*			:	包含padding和borderWidth	
		* 		2			:	包含padding
		* 		3			:	都不包含，即样式表值
		* @param	{number,string}	[value]
		* 		要设置的目标值。如果未提供，则获取当前值
		* @param	{boolean,number}	[ifRelative]
		* 		0|false*	:	指定v为绝对目标值	
		* 		1|true		:	指定v为相对当前值的增加或减少量的相对目标值
		* @return	{jquery,number}
		* 		设置完成并返回元素，或返回获取到的值
		*/
		dim:function(b,m,v,t){
			b=!!b+0;			
			v=parseFloat(v);
			if(m===void 0)m=1;
			var
				e=this,
				x=["idth","eight"][b],
				c=["outer","outer","inner",""],
				a=[],
				i=4;
			while(i--){
				c[i]=c[i]+(i<3?["W","H"]:["w","h"])[b]+x;
				a[i]=e[c[i]](i<2?!i:void 0);
			}	
			return isNaN(v)?a[m]:e[c[3]](v+a[3]-(t?0:a[m]));
		},
		/**
		* 获取当前第一个元素的rect
		* @param	{number}			[rectType]
		* 		获取哪一种rect
		* 		0			:	包含padding和borderWidth和margin
		* 		1*			:	包含padding和borderWidth	
		* 		2			:	包含padding
		* 		3			:	都不包含，即样式表值
		* 		4			:	style.clip
		* @param	{rect}			[clipRect]
		* 		如果指定了这个参数，则第一个参数会被强制为1，此函数用于获取这个参数值与通过第一个参数获取到的rect的交集
		* @return	{rect}
		*/
		rec:function(m,v){
			if(m===void 0)m=1;
			if(m>3||v!==void 0)return (new Rect(v||this.css("clip"))).inter(this,1);
			var
				e=this,
				r={
					r:e.dim(0,m),
					b:e.dim(1,m)
				},
				a=["margin@",0,"border@Width","padding@"],
				b=["Left","Top"],
				x=0,
				y=0,
				n=0,
				l,
				z;
			if(m-1)for(;n<=m;n++){
				l=a[n];
				if(l){
					z=parseFloat(e.css(a[n].replace(/@/,b[0])));
					x=n>1?x+z:x-z;
					z=parseFloat(e.css(a[n].replace(/@/,b[1])));
					y=n>1?y+z:y-z;
				}
				else x=y=0;
			}	
			r.t=y;
			r.l=x;
			return new Rect(r);
		}
		/*dimTo:function(e,w,h){
			e=$(e);
			return this.dim(0,w,e.dim(0,w)).dim(1,h,e.dim(1,h));
		}*/
	});
	
})(jQuery,window);