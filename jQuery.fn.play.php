<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

#box{background:#efefef;width:800px;height:100px;position:relative;}
#block{position:absolute;width:80px;height:40px;top:25px;left:25px;background:#00B8EE;color:#fff;display:block;padding:5px;letter-spacing:1px;}

</style>

<script>

$(function(){

	$("#box").hover(
		function(){
			$("#block").stop().play({
				left:"700px",
				background:"#EC108D"
			},2000,"outbounce",function(){
				$("#block").text("完成动画");
			});
		},
		function(){
			$("#block").stop().play(function(){
				$("#block").text("完成还原");
			});
		}
	);

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：将鼠标移到下方区域内开始动画，移出则还原</h4><div id="box"><h6 id="block">准备开始</h6></div></section><section></section>

<?php include 'leko.foot.inc'; ?>