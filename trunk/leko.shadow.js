(function(_,$){

	_.fn(
		"shadow",
		function(o,v,d,c){
			var
				b=$.support.shadow,
				l=v.disabled||!o.visible(),
				g=_.rgba(v.color),
				a=g[3],
				x=v.x,
				y=v.y,
				r=v.blur,
				p=o.css("position"),
				e=d.$,
				j=$.isJqueryObject(v.src);
			g=_.color(g);
			if(b&&!j)o.css(b,l?"none":x+"px "+y+"px "+r+"px "+g);
			else{

				if(!e)e=$("<div>&nbsp;</div>").css({
					border :0,
					margin :0,
					padding:0,
					outline:0,
					float:"none",
					left:0,
					top:0
				});
				v.$=e;
				e.appear(o.solid()).toggle(!l);
				if(!l)e.css({
					position:p=="static"||p=="relative"?"absolute":p,
					filter:_.msie()?"progid:DXImageTransform.Microsoft.alpha(opacity="+a*100+") progid:DXImageTransform.Microsoft.blur(pixelradius="+r+")":"",
					backgroundColor:g,
					opacity:a
				}).pileBy(o,1).resize(o).move(o,1,1,x-r+(!r||!x?0:x>0?-1:1),y-r+(!r||!x?0:y>0?-1:1));
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