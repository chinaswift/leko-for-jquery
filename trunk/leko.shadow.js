(function(_,$){

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
		}
	);

})(Leko,jQuery);