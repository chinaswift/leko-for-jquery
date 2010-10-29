(function($,_){
	
	$$(
		"li",
		function(c){},
		{}
	);
	
	$$(
		"list",
		function(c){},
		{
			max:Number.MAX_VALUE,
			min:Number.MIN_VALUE,
			tag:"li",
			count:0,
			all:function(){
				return $(this.selector,this.$);
			},
			add:function(e,b){				
				e=this.initItem(e)[b?"prependTo":"appendTo"](this.$);
				c.update();
				return e;	
			},
			item:function(){
				
			},
			initItem:function(e){
				var
					c=this,
					i=c.count++;
				return c[i]=$(e).li({
					list:c,
					index:i	
				});				
			},
			update:function(){
				if(this.autoSize)this.autoSize();				
			},
			constructor:function(n,e){
				var
					c=this,
					d=["h","v","z"],
					i=d.length;
				c._(n,e);
				c.selector=">"+this.tag+":not(.alone)";
				while(i--)if(e.hasClass("list-"+d[i])){
					c.dir=i;
					break;
				}
				c.all().each(function(i,e){
					c.initItem(e);
				});
				c.update();	
			}
		}
	);
	
	$$(
		"nav",
		function(c){},
		{
			autoSize:function(){
				var
					c=this,
					d=c.dir,
					o=c.$,
					w=0;
				c.all().each(function(i,e){
					e=$(e);
					if(d==2)e.dimension(0,1,o.width());
					else w+=e.dimension(0,1);
				});
				if(!d)o.width(w+($.support.doubleFloatPadding?parseInt(o.css("paddingRight")):0));
			}
		},
		"list"	
	);
		
	$(function(){
		$(".nav").nav({y:6});
		//console.log($("#nav-1")._("nav").add("<li><a href='#'>新增的</a></li>"));		
		//console.log($("#nav-2")._("nav").add("<li><a href='#'>新增的</a></li>",true));
	});
	
})(jQuery,Leko);