(function(_,$){

	var
		N="list",
		L="li",
		D="deco",
		U="."+D,
		P=["nav"],
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
		T;

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
		N,
		function(o,v,d,n){
			var
				l=v.live||L,
				i=W.length,
				a=v.fn,
				m;
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
							c=$(l+":not("+U+")",o),
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
						if(i||!v.multi)r=r.eq(0);
						c.each(function(m,e){
							e=$(e);
							b=!!(r.index(e)+1);
							if(h)$.each(h,function(l,h){
								h(e,b,e.currents(L,$.extend(true,{},v,e.defaults(L))),e.runtimes(L));
							});
							if(z&&b!=e.hasClass(y))z.call(o,m,e);							
							e.toggleClass(y,b);
						});
						d[y]=r.length&&r;						
					};
				})(i);
				m=v[Y[i]];
				if(a==P[0]&&!i&&m===void 0){
					m=$(l+X[0],o);
					if(!m.length) m=0;
				}
				if(m!==void 0)d[i](m);		
			}
			d[1]($(l+X[0],o));
			if(a==P[0])o.undelegate(l,T,d.f).delegate(l,T,d.f=function(e){
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
			lamp:function(o,v,d,n){
				return{
					1:function(e,b,c,r){
						$(":first-child",e).stop().play(b?c.lamp:null,v.speed,v.fx);
					}
				};
			},
			lava:function(o,v,d,n){
				return{
					1:function(e,b,c,r){
						if(b){
							var
								a="position",
								p=e.css(a,function(i,v){
									return v=="static"?"relative":v;
								})[a]();
							d.b=(d.b||($(U,o).elements()||$("<li />").addClass(D).append("<a href='#'>&nbsp;</a>")).css({
								float:"none",
								position:"absolute"
							}).prependTo(o).show().height(e.height()).moveTo(NaN,p.top)).stop().animate($.extend({
								left :p.left,
								width:$(":first-child",e)[(v.inner?"w":"outerW")+"idth"]()
							},c.lava),c.speed,c.fx);
						}
					}
				};
			}
		}
	);

})(Leko,jQuery);