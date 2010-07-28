<?php include 'leko.head.inc'; ?>

<style>

a#test,a#test:hover{color:#000;text-decoration:none;}

</style>

<script src="leko.color.js"></script>

<script>

$(function(){

	$("a").colorFadeIn();
	$("a").ini($.fn.colorFadeIn,{duration:'normal'});
	$("a").colorFadeIn();
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

<section><a href="#" id="test" _="colorFadeIn:{duration:'fast'}">测试一下</a></section>

<?php include 'leko.foot.inc'; ?>