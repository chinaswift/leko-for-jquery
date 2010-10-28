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
			all:function(){
				return $(this.selector,this.$);
			},
			add:function(){
				
			},
			constructor:function(n,e){
				var
					c=this;
				c._(n,e);
				c.count=0;
				c.all().each(function(i,e){
					c["_"+i]=$(e).li({
						index:c.count++
					});
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