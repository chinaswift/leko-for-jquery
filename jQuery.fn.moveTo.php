<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{background:#efefef;position:relative;}
#box1{width:300px;background:#EC108D;height:80px;opacity:0.5;filter:progid:DXImageTransform.Microsoft.alpha(opacity=50);height:100px;}
#box2{width:500px;background:#F8A530;height:80px;opacity:0.5;filter:progid:DXImageTransform.Microsoft.alpha(opacity=50);height:120px;}
.block{position:absolute;width:200px;height:40px;background:#EC108D;border:10px solid #00B8EE;padding:10px;color:#fff;z-index:1;}
select{margin-right:15px;}
.block mark{color:#ff0;}
</style>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	$("#button1").click(function(){

		var
			x=eval("("+$("#x option:selected").text()+")"),
			y=eval("("+$("#y option:selected").text()+")"),
			r=$("#r option:selected").text(),
			o=$("#block1"),
			p;
		
		p=o.moveTo(x,y,r=="null"?null:$("#"+r)).position();

		o.html('top :<mark>'+p.top+'</mark>px<br />left:<mark>'+p.left+'</mark>px');
		$("#code1").html('$("#block1").<mark>moveTo</mark>('+x+','+y+','+(r=="null"?null:'$("#'+r+'")')+')');

	}).click();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>



<section><h4>例一</h4><div class="box"><div class="block en" id="block1">&nbsp;</div><div id="box2"><div id="box1">&nbsp;</div></div></div></section>

<section><code id="code1"></code></section>

<section>
<label class="en" for="x">left:</a></label><select class="en" id="x">
<option selected>null</option>
<option>500</option>
<option>300</option>
<option>50</option>
<option>10</option>
<option>0</option>
</select>
<label class="en" for="y">top:</a></label><select class="en" id="y">
<option selected>null</option>
<option>150</option>
<option>100</option>
<option>50</option>
<option>10</option>
<option>0</option>
</select>
<label class="en" for="r">rect:</a></label><select class="en" id="r">
<option selected>null</option>
<option>box1</option>
<option>box2</option>
</select><button class="en" id="button1">Click me to Move it !</button></section>

<?php include 'leko.foot.inc'; ?>