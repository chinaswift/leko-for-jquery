<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{
	background:#efefef;width:600px;padding:25px;position:relative;height:150px;text-align:right;
}
.popup{
	position:absolute;text-align:right;color:#fff;padding:5px;left: 25px;top: 25px;opacity:0.75;filter:progid:DXImageTransform.Microsoft.alpha(opacity=75);
	
}
#block1{
	background:#EC108D;width: 50px;height: 25px;opacity:1;filter:progid:DXImageTransform.Microsoft.alpha(opacity=100);
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
			o=$("#o option:selected").text(),
			e=$("#e option:selected").text(),
			b=eval("("+$("#b option:selected").text()+")");
		$("#code").html('$("#'+o+'").pileBy($("#'+e+'"),'+b+')');

		$("#"+o).pileBy($("#"+e),b);
	
	});

	x.first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4><div class="box en" id="box">
<div class="popup en" id="block4">block4</div>
<div class="popup en" id="block3"><div class="popup en" id="block2">block2</div>block3</div>

<div class="popup en" id="block1">block1</div>box
</div></section>

<section><code id="code">&nbsp;</code></section>

<section>
<label class="en" for="o">src:</a></label><select class="en" id="o">
<option selected>block1</option>
</select>
<label class="en" for="e">target:</a></label><select class="en" id="e">
<option selected>block2</option>
<option>block3</option>
<option>block4</option>
<option>box</option>
</select>
<label class="en" for="b">before:</a></label><select class="en" id="b">
<option selected>false</option>
<option>true</option>
</select>
</section>

<?php include 'leko.foot.inc'; ?>