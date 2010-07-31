<?php include 'leko.head.inc'; ?>

<style>


</style>

<script src="leko.color.js"></script>

<script>

$(function(){

	$("#test").colorShade({properties:{color:"red",backgroundColor:"green"}});
	$("#test").colorShade({properties:{color:"green",backgroundColor:"red"}});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section style="background:url();"><a style="color:red;" id="test" _="colorShade:{}">测试一下</a></section>

<?php include 'leko.foot.inc'; ?>