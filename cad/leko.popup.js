(function(_,$){

	_.fn(
		"popup",
		function(o,v,d,n){
			var
				m=$(v.menu),
				x="mouseenter",
				y="mouseleave",
				z=x+" "+y;
			if(m[0])m.add(o).unbind(z,d.f).bind(z,d.f=function(e){
				d.$=/er$/.test(e.type);
				window.clearTimeout(d._);
				if(d.$){
					m.show().move(o,1,1,v.offx||0,v.offy||0);
					$(".iframe",m).iframe();
				}
				else d._=window.setTimeout(function(){
					if(!d.$)m.hide();
				},100);
			});
		}
	);

})(Leko,jQuery);