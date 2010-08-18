<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>
.box{position:relative;width:100%;height:200px;z-index:0;}
.box .en{position:absolute;left:0px;top:0px;text-align:right;padding:5px;opacity:0.75;filter:progid:DXImageTransform.Microsoft.alpha(opacity=75);}
#box1{background:#00B8EE;width:150px;height:150px;border:20px solid #EC108D;}
#box2{background:#F8A530;width:100px;height:100px;border:15px solid #000000;}
#box3{background:#9CCD4A;width: 50px;height: 50px;border:10px solid #EC108D;}
.block{width:200px;height:100px;background:#EC108D;border:10px solid #00B8EE;padding:10px;color:#fff;}
select,button{margin-right:15px;}
.block mark{color:#ff0;}
</style>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	$("#button2").click(function(){
		var
			o=$("#src option:selected").text(),
			e=$("#target option:selected").text(),
			w=eval("("+$("#wset option:selected").text()+")"),
			h=eval("("+$("#hset option:selected").text()+")");
		$("#code2").html('$("#'+o+'").<mark>layout</mark>($("#'+e+'")'+(w!==null||h!==null?','+w+(h!==null?','+h:''):'')+')');
		$("#"+o).layout($("#"+e),w,h);
	}).click();
	$("#button4").click(function(){
		$("#box1").resizeTo(150,150);
		$("#box2").resizeTo(100,100);
		$("#box3").resizeTo( 50, 50);
		$("#src,#target,#wset,#hset").attr("selectedIndex",0);
		$("#button2").click();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一</h4><div class="box">
<div class="en" id="box1">box1</div>
<div class="en" id="box2">box2</div>
<div class="en" id="box3">box3</div>
</div></section>

<section><code id="code2"></code></section>

<section>
<label class="en" for="src">src:</a></label><select class="en" id="src">
<option selected>box3</option>
<option>box2</option>
<option>box1</option>
</select>
<label class="en" for="target">target:</a></label><select class="en" id="target">
<option selected>box3</option>
<option>box2</option>
<option>box1</option>
</select>
<label class="en" for="wset">width-set:</a></label><select class="en" id="wset">
<option selected>null</option>
<option>0</option>
<option>20</option>
<option>-20</option>
</select>
<label class="en" for="hset">height-set:</a></label><select class="en" id="hset">
<option selected>null</option>
<option>0</option>
<option>20</option>
<option>-20</option>
</select><button class="en" id="button2">Resize !</button><button class="en" id="button4">Reset !</button>
</section>

<?php include 'leko.foot.inc'; ?>