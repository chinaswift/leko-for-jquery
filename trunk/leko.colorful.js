(function(_,$){

	_.fn(
		"colorful",
		function(o,v,d,n){
			var
				l=v.live,
				h=!!v.focus,
				m=h?"focusin focusout":"mouseenter mouseleave",
				f=function(e){
					if(!v.disabled){
						var
							o=$(this),
							b=l?o.runtimes(n):d,
							w=l?o.currents(n,$.extend(true,{},v,o.defaults(n))):v,
							t=/(?:t|e)$/.test(e.type),
							g=w.properties,
							q=b.$,
							p=_.colorProperties,
							j=g[p[2]],
							i=3;					
						if(!q){
							delete g[p[2]];
							if(j)while(i<7)g[p[i++]]=j;
							q={};
							b._={};
							for(i in g){
								b._[i]=o.css(i);
								q[i]=_.solidColor(this,i);
							}
							b.$=q;
						}
						o.stop().animate(t?q:g,w.duration,w.easing,t?function(){
							for(var i in b._)o.css(i,b._[i]);						
						}:void 0);
					}
				};
			if(l)o.undelegate(l,m,d[m]).delegate(l,m,v[m]=f);
			else o.unbind(m,d[m]).bind(m,v[m]=f);
		},
		{
			duration:1000,
			easing:"swing"
		}
	);

})(Leko,jQuery);