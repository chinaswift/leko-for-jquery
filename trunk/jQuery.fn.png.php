<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{background:#00B8EE;width:800px;padding:25px;}
.box img,.box a{width:128px;height:128px;display:block;}
.box a{background:#9CCD4A url("twitter-128.128-2.png") no-repeat center center;margin-left:25px;}
.box a:hover{background-color:#EC108D;color:#fff;}
</style>

<script>

$(function(){

	$("button").text(_.msie(7,1)?"应用补丁":"当前浏览器不需要应用此补丁").attr("disabled",_.msie(7)).click(function(){

		$(".box *").png();

	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一</h4><div class="box tr">

<img src="twitter-128.128-1.png" class="td" /><a href="#" class="td"><h3>&nbsp;囧鸟</h3></a>

</div></section>

<section><button class="en">Fix All !</button></section>

<?php include 'leko.foot.inc'; ?>