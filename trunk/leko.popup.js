(function(_,$){

	var
		$b=$.support.shadow,
		$c="position",
		$u="absolute";

	_.fn(
		"popup",
		function(o,v,d,c){
			var
				a=v.shadow,
				s=Math.round,
				b=o.visible(),
				f=$(v.target).first(),
				w,h,m,n,p,q,e;
			if(f.length&&f.visible().d){
				if(a)o.shadow(a);
				/*e=$(o.getShadow().$);
				e.add(o).css($c,$u).insertAfter(f).transparent(1).show();
				q=o[$c]();
				p=f[$c]();				
				$(o.getShadow().$).add(o).css($c,$u).insertAfter(f).transparent(1).show();
				q=o.position();
				m=o.outerWidth( );
				n=o.outerHeight();
				w=f.outerWidth( );
				h=f.outerHeight();
				o.andShadow().moveBy(p.left+[-m,0,s((w-m)/2),w-m,w][v.posX||0]+(v.offsetX||0)-q.left,p.top +[-n,0,s((h-n)/2),h-n,h][v.posY||0]+(v.offsetY||0)-q.top);
				o.transparent();
				e.add(o).transparent();*/
			}			
		},
		{
			shadow:{}
		},
		"shadow",
		function(o,v,d,c){
			var
				a=v.opacity,
				x=v.x,
				y=v.y,
				r=v.blur,
				e=d.$,
				s=_.msie(),				
				b,p,q;
			if($b)o.css($b,x+"px "+y+"px "+r+"px "+_.color([0,0,0,a]));
			else{
				if(!e){
					q=o.css($c)!=$u;
					o.add(o.parent()).css($c,function(i,v){
						return q&&v=="static"?"relative":v;
					});
					e=d.$=$("<div />").css($c,$u).css({
						float:"none",
						border:0,
						margin:0,
						padding:0
					}).hide();
				}
				e.insertBefore(o).css({
					zIndex:o.css("zIndex"),
					opacity:a,
					background:"#000",
					filter:s?"progid:DXImageTransform.Microsoft.blur(pixelradius="+r+",makeshadow='true',ShadowOpacity="+a+")":""					
				});
				d._=function(){
					b=o.visible();
					if(!b.d)o.transparent(1).show();
					q=o[$c]();
					e.resizeTo(o.outerWidth(),o.outerHeight()).moveTo(q.left+x-r+(!r||!x?0:x>0?-1:1),q.top+y-r+(!r||!x?0:y>0?-1:1)).add(o).transparent(!b.v).toggle(b.d);
				}
				d._();
			}
		},
		{
			x:2,
			y:2,
			blur:3,
			opacity:0.3
		}
	);

	$.fn.extend({
		resetShadow:function(){
			return this.each(function(){
				var
					d=$(this).data("shadow");
				if(d&&d._)d._();
			});
		}
	});

})(Leko,jQuery);