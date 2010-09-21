(function(_,$){

	_.fn(
		"nav",
		function(o,v,d,n){
			var
				a="li",
				t=v.li,
				j=v.labelto,
				x="labelled",
				y="selected",
				m="mouseleave",
				z="mouseenter",
				q="click",
				k=v.hover,
				f=$.effects(n,v.effect)(o,v,d,n)||{},
				h=function(e){
					e=e?$(e):$(t,o).filter("."+y);
					var
						c=$.extend(true,{},v,e.defaults(a)),
						l=c.css,
						m=d[x],
						g=e[0];
					if(l&&m!=g&&!$(m).is("."+y))(j?$(j,m):$(m)).stop().play();
					if(g){
						d[x]=g;
						if(l)(j?$(j,e):e).stop().play(l,v.speed,v.fx);
						if(f[x])f[x](e,c);
					}
				},
				s=function(i){
					var
						c=$(t,o).not("."+x),
						l=v.onselect,
						m=-1;
					if(i!==void 0)i=($.isNumber(i)?c.eq(i):$(i))[0];
					if(i)c.each(function(n,e){
						$(e).toggleClass(y,e==i);
						if(e==i)m=n;
					});
					h(i);
					if(f[y])f[y](i);
					if(l)l.call(o,i,m);
				};
			o.unbind(m,d.m).bind(m,d.m=function(e){
				h();
			});
			$(v.li,o).die(z,d.z).live(z,d.z=function(e){
				if(!$(this).is("."+x))if(k)s(this);else h(this);				
			}).die(q,d.q).live(q,d.q=function(e){
				if(!(k||$(this).is("."+x)))s(this);
			});
			h();
		},
		{
			li:"li",
			labelto:"a",			
			speed:700,
			fx:"outback"			
		},
		{
			lavalamp:function(o,v,d,n){
				return{
					labelled:function(e,a){
						var
							p=e.position(),
							j=v.labelto;
						(d.b=d.b||$("<"+v.li+"/>").addClass("labelled").append("<"+j+" href='#'>&nbsp;</"+j+">").css({
							float:"none",
							position:"absolute"
						}).height(e.height()).prependTo(o).moveTo(NaN,p.top)).stop().animate($.extend({
							left :p.left,
							width:(j?$(j,e):e).width()
						},a.labelcss),v.speed,v.fx);							
					},
					selected:$.noop
				};
			}
		}
	);

})(Leko,jQuery);