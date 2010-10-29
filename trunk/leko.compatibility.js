
(function($,d){
	var
		b=$.browser,
		s=$.support,
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
		},
		v=f(b.version,3),
		e=b.msie;
		
	s.dashedHtml5Tag=e&&v<9;
	s.doubleFloatPadding=e&&v<8;
	
	if(s.dashedHtml5Tag)(function(){
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
			g&&g[A](v[H]);
		};
	})();
	
	$(function(){
		
		$("a,area").live("click",function(e){
			if($(this).attr("href")=="#")return !!e.preventDefault();
		});
		
	});		

})(jQuery,document);