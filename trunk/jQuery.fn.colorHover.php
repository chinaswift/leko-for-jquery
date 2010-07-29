<?php include 'leko.head.inc'; ?>

<style>

a#test,a#test:hover{color:#000;text-decoration:none;}
a#test:hover{color:#f30;text-decoration:underline;}

</style>

<script src="leko.color.js"></script>

<script>

$(function(){

	$("#test").colorShade();
	$("#test").colorShade({x:'normal'});
	$("#test").colorShade();
	//$("section").colorShade({x:'normal'});
	
	/*
	$("#test").hover(function(){
		$(this).animate({color:"green"},"slow");
	},function(){}).colorFadeHover({duration:'normal'});

	$("a").colorFadeHover();
	*/
});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><a href="#" id="test" _="colorShade:{duration:'fast'}">测试一下</a></section>

<?php include 'leko.foot.inc'; ?>