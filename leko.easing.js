(function(_,$){

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

})(Leko,jQuery);