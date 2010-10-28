(function($,_){
	
	$$(
		"li",
		function(c){},
		{}
	);
	
	$$(
		"list",
		function(c){
			//console.log(c);	
		},
		{
			max:Number.MAX_VALUE,
			min:Number.MIN_VALUE,
			selector:">li:not(.alone)",
			count:0,
			all:function(){
				return $(this.selector,this.$);
			},
			add:function(e){
								
			},
			initItem:function(e){
				var
					c=this;
				return $(e).li({
					list:c,
					index:c.count++	
				});				
			},
			constructor:function(n,e){
				var
					c=this;
				c._(n,e);				
				c.all().each(function(i,e){
					c["_"+i]=c.initItem(e);
					console.log($(e).data("li").index);
				});
				
			}
		}
	);	
	
	
	$(function(){
		$("#list-01").list({y:6});
		console.log($("#list-01")._("list").all());
	});
	
})(jQuery,Leko);