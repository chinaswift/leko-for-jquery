(function(_,$){

	var
		B=$.support.shadow;

	$.fn.andShadow=function(b){
		var
			o=this,
			d=o.leko("shadow");
		if(b&&d._)d._();
		return $(d.$).add(o);
	};

	_.fn(
		"menu",
		function(o,v,d,c){

		},
		/*"popup",
		function(o,v,d,c){
			var
				a=v.shadow,
				s=Math.round,
				b=o.visible(),
				f=$(v.target).first(),
				w,h,m,n,p,q,e;
			if(f.length&&f.visible().d){
				if(a)o.shadow(a);
				e=$(o.getShadow().$);
				e.add(o).css("position","absolute").insertAfter(f).transparent(1).show();
				q=o["position"]();
				p=f["position"]();				
				$(o.getShadow().$).add(o).css("position","absolute").insertAfter(f).transparent(1).show();
				q=o.position();
				m=o.outerWidth( );
				n=o.outerHeight();
				w=f.outerWidth( );
				h=f.outerHeight();
				o.andShadow().moveBy(p.left+[-m,0,s((w-m)/2),w-m,w][v.posX||0]+(v.offsetX||0)-q.left,p.top +[-n,0,s((h-n)/2),h-n,h][v.posY||0]+(v.offsetY||0)-q.top);
				o.transparent();
				e.add(o).transparent();
			}			
		},*/
		{
			shadow:{}
		},
		"shadow",
		function(o,v,d,c){
			var
				g=_.rgba(v.color),
				a=g[3],
				x=v.x,
				y=v.y,
				r=v.blur,
				e=d.$,
				s=_.msie();
			g=_.color(g);
			if(B)o.css(B,x+"px "+y+"px "+r+"px "+g);
			else{
				if(!e){
					e=d.$=$("<div />").css({
						border :0,
						margin :0,
						padding:0,
						outline:0,
						float:"none"
					});
				}
				e.css({
					opacity:a,
					background:g,
					filter:s?"progid:DXImageTransform.Microsoft.alpha(opacity="+a*100+") progid:DXImageTransform.Microsoft.blur(pixelradius="+r/*+",makeshadow='true',ShadowOpacity="+a*/+")":""					
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
					}).layout(o).locate(o,1,1,x-r+(!r||!x?0:x>0?-1:1),y-r+(!r||!x?0:y>0?-1:1)).bubble(o,1,1).add(o).transparent(!b.v).toggle(b.d);
				};
				d._();
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