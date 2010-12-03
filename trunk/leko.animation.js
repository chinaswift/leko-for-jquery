(function($){
	
	/**
	* 重载jquery.fn.animate方法
	*/			
	(function(){
		
		var
			f=$.fn.animate;
		
		leko("ui",{
			constructor:function(n,e){
				this._(n,e);
				this.css={};
				this.src={};
			},
			theme:function(t,p,s,g,l){
				var
					c=this,
					e=c.$,
					i,
					b={},
					a=["backgroundPosition","borderColor"],
					x={Bottom:0,Left:0,Right:0,Top:0},
					w,
					n,
					m,
					v,
					h;
				e.stop(true);
				if($.isString(p))p=$.cssRule(p);
				if(p){
					for(i in p){
						m=p[i];
						v=$.inArray(i,a);
						if(v+1){						
							if(v){
								w=i.match(/[A-Z]?[a-z]+/g);
								for(n in x)b[w[0]+n+(w[1]||"")]=m;
							}
							else{
								m=m.split(/\s+/);
								b[i+"X"]=m[0]||0;
								b[i+"Y"]=m[1]||0;
							}
							delete p[i];
						}
						
					}
					p=$.extend(c.css,p,b);
				}
				else p=c.src;
				
				if(t)$.fn.css.call(e,p);
				else{
					c.inop=1;
					h=l||s&&s.complete||$.noop;
					l=function(){
						c.css={};
						delete c.inop;
					}
					if($.isObject(s))s.complete=l;				
					f.call(e,p,s,g,l);
				}
				return e;
			}
		});
	
		$.fn.animate=function(p,s,g,l){
			return $$(this,"ui").theme(0,p,s,g,l);
		};
	
	})();

	/**
	* backgroundPositionX,backgroundPositionY
	*/	
	$.each(["backgroundPositionX","backgroundPositionY"],function(i,a){
		$.fx.step[a]=function(x){
			var
				e=x.elem,
				c,
				n,
				v;
			if(x.state==0){
				c=[$.css(e,a),x.options.curAnim[a]];
				n=2;
				while(n--){
					v=String(c[n]||0);
					v=v=="top"||v=="left"?0:v=="bottom"||v=="right"?"100%":v=="center"?"50%":v;
					v=/^([\+\-]?[\.\d]+)([^\.\d]*)$/.exec(v);
					v[1]=parseInt(v)||0;
					c[n]=v;					
				}	
				c[0][2]=c[1][2]=c[0][1]&&(c[0][2]||"px")||c[1][1]&&(c[1][2]||"px")||"px";
				x.start=c[0];
				x.end=c[1];
			}
			c=x.start;
			n=parseInt((parseFloat(x.pos)*(x.end[1]-c[1]))+c[1]);
			if(!isNaN(n))$.style(e,a,n+c[2]);
		}
	});
	
	/**
	* clip,clipTop,clipRight,clipBottom,clipLeft
	*/	
	$.each(Rect.props ,function(i,a){
		$.fx.step[a]=function(x){
			var
				e=x.elem,
				j=Rect.attrs,
				c=new Rect(),
				i=4,
				n,
				b,
				p,
				q,
				m=parseFloat(x.pos);
			if(x.state==0){
				x.start=$(e).rec(4);
				q=x.options.curAnim[a];
				if(a!="clip"){
					p={};
					p[a.replace(/clip(.).+/,"$1").toLowerCase()]=q;
					q=p;
				}
				x.end=$(e).rec(4,q);
			}
			b=x.start;
			while(i--){
				n=j[i];
				t=parseInt((m*(x.end[n]-b[n]))+b[n]);	
				if(isNaN(t))return;
				c.setValue(n,t);
			}		
			e.style.clip=c.toString();			
		}
	});

	/**
	* color,backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,outlineColor
	*/			
	$.each(Color.props,function(i,a){
		$.fx.step[a]=function(x){
			var
				e=x.elem,
				j=Color.attrs,
				c=new Color(),
				i=4,
				n,
				b,
				m=parseFloat(x.pos),
				t;
			if(x.state==0){
				x.start=$(e).bgc(a);
				x.end=$(e).bgc(x.options.curAnim[a],1);	
			}
			b=x.start;			
			while(i--){
				n=j[i];
				t=parseInt((m*(x.end[n]-b[n]))+b[n]);	
				if(isNaN(t))return;
				c.setValue(n,t);
			}					
			e.style[a]=c.toString();		
		}
	});

	/**
	* easing
	*/	
	$.extend($.easing,{
		inquad:function(x,t,b,c,d){
			return c*(t/=d)*t+b;
		},
		outquad:function(x,t,b,c,d){
			return -c*(t/=d)*(t-2)+b;
		},
		inoutquad:function(x,t,b,c,d){
			return (t/=d/2)<1?c/2*t*t+b:-c/2*((--t)*(t-2)-1)+b;
		},
		incubic:function(x,t,b,c,d){
			return c*(t/=d)*t*t+b;
		},
		outcubic:function(x,t,b,c,d){
			return c*((t=t/d-1)*t*t+1)+b;
		},
		inoutcubic:function(x,t,b,c,d){
			return (t/=d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b;
		},
		inquart:function(x,t,b,c,d){
			return c*(t/=d)*t*t*t+b;
		},
		outquart:function(x,t,b,c,d){
			return -c*((t=t/d-1)*t*t*t-1)+b;
		},
		inoutquart:function(x,t,b,c,d){
			return (t/=d/2)<1?c/2*t*t*t*t+b:-c/2*((t-=2)*t*t*t-2)+b;
		},
		inquint:function(x,t,b,c,d){
			return c*(t/=d)*t*t*t*t+b;
		},
		outquint:function(x,t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t+1)+b;
		},
		inoutquint:function(x,t,b,c,d){
			return (t/=d/2)<1?c/2*t*t*t*t*t+b:c/2*((t-=2)*t*t*t*t+2)+b;
		},
		insine:function(x,t,b,c,d){
			return -c*Math.cos(t/d*(Math.PI/2))+c+b;
		},
		outsine:function(x,t,b,c,d){
			return c*Math.sin(t/d*(Math.PI/2))+b;
		},
		inoutsine:function(x,t,b,c,d){
			return -c/2*(Math.cos(Math.PI*t/d)-1)+b;
		},
		inexpo:function(x,t,b,c,d){
			return t==0?b:c*Math.pow(2,10*(t/d-1))+b;
		},
		outexpo:function(x,t,b,c,d){
			return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
		},
		inoutexpo:function(x,t,b,c,d){
			return t==0?b:t==d?b+c:(t/=d/2)<1?c/2*Math.pow(2,10*(t-1))+b:c/2*(-Math.pow(2,-10*--t)+2)+b;
		},
		incirc:function(x,t,b,c,d){
			return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;
		},
		outcirc:function(x,t,b,c,d){
			return c*Math.sqrt(1-(t=t/d-1)*t)+b;
		},
		inoutcirc:function(x,t,b,c,d){
			return (t/=d/2)<1?-c/2*(Math.sqrt(1-t*t)-1)+b:c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
		},
		inelastic:function(x,t,b,c,d){
			var
				s=1.70158,
				p=0,
				a=c;
			if(t==0)return b;
			if((t/=d)==1)return b+c;
			if(!p)p=d*.3;
			if(a<Math.abs(c)){
				a=c;
				s=p/4;
			}
			else s=p/(2*Math.PI)*Math.asin(c/a);
			return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
		},
		outelastic:function(x,t,b,c,d){
			var
				s=1.70158,
				p=0,
				a=c;
			if(t==0)return b;
			if((t/=d)==1)return b+c;
			if(!p)p=d*.3;
			if(a<Math.abs(c)){
				a=c;
				s=p/4;
			}
			else s=p/(2*Math.PI)*Math.asin(c/a);
			return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
		},
		inoutelastic:function(x,t,b,c,d){
			var
				s=1.70158,
				p=0,
				a=c;
			if(t==0) return b;
			if((t/=d/2)==2)return b+c;
			if(!p)p=d*(.3*1.5);
			if(a<Math.abs(c)){
				a=c;
				s=p/4;
			}
			else s=p/(2*Math.PI)*Math.asin(c/a);
			return t<1?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b:a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
		},
		inback:function(x,t,b,c,d,s){
			if(s===void 0)s=1.70158;
			return c*(t/=d)*t*((s+1)*t-s)+b;
		},
		outback:function(x,t,b,c,d,s){
			if(s===void 0)s=1.70158;
			return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
		},
		inoutback:function(x,t,b,c,d,s){
			if(s===void 0)s=1.70158;
			return (t/=d/2)<1?c/2*(t*t*(((s*=(1.525))+1)*t-s))+b:c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
		},
		inbounce:function(x,t,b,c,d){
			return c-$.easing.outbounce(x,d-t,0,c,d)+b;
		},
		outbounce:function(x,t,b,c,d){
			return (t/=d)<(1/2.75)?c*(7.5625*t*t)+b:t<(2/2.75)?c*(7.5625*(t-=(1.5/2.75))*t+.75)+b:t<(2.5/2.75)?c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b:c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
		},
		inoutbounce:function(x,t,b,c,d){
			return t<d/2?$.easing.inbounce(x,t*2,0,c,d)*.5+b:$.easing.outbounce(x,t*2-d,0,c,d)*.5+c*.5+b;
		}
	});

})(jQuery);