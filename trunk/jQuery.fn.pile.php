<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>

<style>

.box{
	background:#efefef;width:600px;padding:25px;position:relative;height:150px;text-align:right;
}
.popup{
	position:absolute;text-align:right;color:#fff;padding:5px;left: 25px;top: 25px;
	
}
#block1{
	background:#EC108D;width: 50px;height: 25px;
}
#block2{
	background:#00B8EE;width:100px;height: 50px;
}
#block3{
	background:#9CCD4A;width:150px;height: 75px;
}
#block4{
	background:#F8A530;width:200px;height:100px;
}
select{margin-right:20px;}

</style>
<script>

$(function(){

	var x=$("select").change(function(){
		
		var
			o=$("#o option:selected").text();
		$("#code").html('$("#'+o+'").pile()');

		$("#"+o).pile();
	
	});

	x.first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4><div class="box en" id="box">
<div class="popup en" id="block4">block4</div>
<div class="popup en" id="block3">block3</div>
<div class="popup en" id="block2">block2</div>
<div class="popup en" id="block1">block1</div>box
</div></section>

<section><code id="code">&nbsp;</code></section>

<section>
<label class="en" for="o">src:</a></label><select class="en" id="o">
<option selected>block1</option>
<option>block2</option>
<option>block3</option>
<option>block4</option>
</select>
</section>

<?php include 'leko.foot.inc'; ?>