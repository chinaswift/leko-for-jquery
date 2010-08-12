<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{
	background:#efefef;padding:10px;height:80px;position:relative;
}
.block{
	position:absolute;width:200px;height:40px;background:#EC108D;border:10px solid #00B8EE;padding:10px;color:#fff;
}
select{margin-right:15px;}
.block mark{
	color:#ff0;
}
</style>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	$("#block1").shadow();

	$("#button1").click(function(){

		var
			x=eval("("+$("#x option:selected").text()+")"),
			y=eval("("+$("#y option:selected").text()+")"),
			o=$("#block1"),
			p=o.andShadow().moveBy(x,y).end().position();

		o.html('top :<mark>'+p.top+'</mark>px<br />left:<mark>'+p.left+'</mark>px');
		$("#code1").html('$("#block1").<mark>moveBy</mark>('+x+','+y+')');

	}).click();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>



<section><h4>例一</h4><div class="box"><div class="block en" id="block1">&nbsp;</div></div></section>

<section><code id="code1"></code></section>

<section>
<label class="en" for="x">left:</a></label><select class="en" id="x">
<option selected>null</option>
<option>20</option>
<option>10</option>
<option>0</option>
</select>
<label class="en" for="y">top:</a></label><select class="en" id="y">
<option selected>null</option>
<option>20</option>
<option>10</option>
<option>0</option>
</select><button class="en" id="button1">Click me to Move it !</button></section>

<?php include 'leko.foot.inc'; ?>