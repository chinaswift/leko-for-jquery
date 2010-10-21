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
		};

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
				l=(v.l=v.live||L),
				i=P.length,
				a=v.fn,
				m;
			while(i--)v[i]=v.fn==P[i];
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
							c=o.children(l+":not("+U+")"),
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
							if(z&&b!=e.hasClass(y))z.call(o,m,e);							
							e.toggleClass(y,b);
						});
						d[y]=r.length&&r;						
					};
				})(i);
				m=v[Y[i]];
				if(v[0]&&!i&&m===void 0){
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