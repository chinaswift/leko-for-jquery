(function(_,$){

	_.fn(
		"shadow",
		function(o,v,d,c){
			var
				b=$.support.shadow,
				g=_.rgba(v.color),
				a=g[3],
				x=v.x,
				y=v.y,
				r=v.blur,
				l=!!v.disabled,
				e=d.$;
			g=_.color(g);
			if(b)o.css(b,l?"none":x+"px "+y+"px "+r+"px "+g);
			else{
				if(!e)e=$("<div />").css({
					border :0,
					margin :0,
					padding:0,
					outline:0,
					float:"none"
				});
				v.$=e;				
				e.css({
					opacity:a,
					background:g,
					filter:_.msie()?"progid:DXImageTransform.Microsoft.alpha(opacity="+a*100+") progid:DXImageTransform.Microsoft.blur(pixelradius="+r+")":""					
				});
				
				d._=function(){
					var
						b=o.visible(),
						f=o.css("position"),
						t=f=="static",
						l=f=="relative";
					if(!b.d)o.transparent(1).show();
					e.css({
						position:t||l?"absolute":f
					}).layout(o).locate(o,1,1,x-r+(!r||!x?0:x>0?-1:1),y-r+(!r||!x?0:y>0?-1:1)).over(o,1,1).add(o).transparent(!b.v).toggle(b.d);
				};
				d._();*/
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