<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

#box1{
	height:100px;/*background:#1A1819 url("bk01.gif");padding:25px;width:600px;*/
}
#box1 div{
	width:50px;height:50px;margin-right:25px;box-shadow:2px 2px 3px rgba(0,0,0,0.3);-moz-box-shadow:2px 2px 3px rgba(0,0,0,0.3);-webkit-box-shadow:2px 2px 3px rgba(0,0,0,0.3); 
}
#block1{
	background:#EC108D;
}
#block2{
	background:#00B8EE;
}
#block3{
	background:#F8A530;
}
#block4{
	background:#9CCD4A;
}

</style>

<script>

$(function(){

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择缓动类型</h4>

<div id="box1" class="tr"><div id="block1" class="td">&nbsp;</div><div id="block2" class="td">&nbsp;</div><div id="block3" class="td">&nbsp;</div><div id="block4" class="td">&nbsp;</div></div>

</section>

<?php include 'leko.foot.inc'; ?>