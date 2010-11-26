
(function($,d){

	if(!$.support.html5Tag)(function(){
		for(var				
			t=d.documentElement,
			x=d.createDocumentFragment,
			g=x&&x(),
			w="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",
			v=w.split("|"),
			p=[],
			H=-1,
			G="firstChild",
			A="createElement";
			++H<v.length;){
			d[A](v[H]);
			if(g)g[A](v[H]);
		};
	})();
	
	$(function(){
		
		$("a,area").live("click",function(e){
			if($(this).attr("href")=="#")return !!e.preventDefault();
		});
		
	});		

})(jQuery,document);