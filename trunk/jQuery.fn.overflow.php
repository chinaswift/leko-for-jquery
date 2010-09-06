<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>

<style>

.box{
	background:#efefef;width:600px;padding:25px;position:relative;height:175px;text-align:right;
}
.popup{
	position:absolute;text-align:right;color:#fff;padding:5px;
	
}
#block1{
	background:#EC108D;width:100px;height: 50px;left: 50px;top: 50px;
}
#block2{
	background:#00B8EE;width:200px;height:100px;left:-50px;top: 25px;
}
#block3{
	background:#9CCD4A;width:300px;height:150px;left:100px;top: 25px;
}
select{margin-right:20px;}

</style>
<script>

$(function(){

	var x=$("select").change(function(){
		var
			o=$("#o option:selected").text(),
			e=$("#e option:selected").text();
		$("#code").html('$("#'+o+'").overflow($("#'+e+'"))='+$("#"+o).overflow($("#"+e)));

	});

	x.first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4><div class="box en" id="box">
<div class="popup en" id="block3"><div class="popup en" id="block2">block2</div>block3</div>
<div class="popup en" id="block1">block1</div>box
</div></section>

<section><code id="code">&nbsp;</code></section>

<section>
<label class="en" for="o">src:</a></label><select class="en" id="o">
<option>box</option>
<option selected>block1</option>
<option>block2</option>
<option>block3</option>
</select>
<label class="en" for="e">target:</a></label><select class="en" id="e">
<option>box</option>
<option>block1</option>
<option selected>block2</option>
<option>block3</option>
</select>
</section>

<?php include 'leko.foot.inc'; ?>