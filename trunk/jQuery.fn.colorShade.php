<?php include 'leko.head.inc'; ?>

<style>


</style>

<script src="leko.color.js"></script>

<script>

$(function(){

	$("#shit").colorShade({
		live:1,
		selector:"a",
		properties:{color:"red",backgroundColor:"green"}
	});

	
	//$("#test").colorShade({properties:{color:"red",backgroundColor:"green"}});
	//$("#test").colorShade({properties:{color:"green",backgroundColor:"red"}});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section id="shit">

<a style="color:red;" id="test">测试一下</a>

<br /><br />

<a style="color:red;" colorShade="properties:{color:'green',backgroundColor:'red'}">测试一下</a>

</section>

<?php include 'leko.foot.inc'; ?>