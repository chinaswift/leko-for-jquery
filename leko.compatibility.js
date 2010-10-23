
(function($){
	var
		b=$.browser,
		s=$.support,
		v=b.version,
		f=function(n,w){
			var
				d,
				l;
			return parseFloat(n.replace(/\.|\d+/g,function(a){
				if(a=="."){
					if(d)a="";else d=a;
				}
				else if(w){
					l=w-a.length;
					if(l>0)while(l--)a="0"+a;
				}				
				return a;	
			}));			
		};
		
		if(b.msie&&v<9)(function(){
			for(var
				b=document,
				t=b.documentElement,
				x=b.createDocumentFragment,
				g=x&&x(),
				o={},
				w="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",
				v=w.split("|"),
				p=[],
				H=-1,
				G="firstChild",
				A="createElement";
				++H<v.length;){
				b[A](v[H]);
				g&&g[A](v[H]);
			};
		})();
		
		//console.log(b);

})(jQuery);