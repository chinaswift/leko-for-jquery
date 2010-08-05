<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{
	background:#efefef;width:800px;height:50px;padding:25px;
}
.shadow{
	width:150px;height:40px;margin-right:25px;padding:5px;Monaco,Menlo,Consolas,"lucida console",'Courier New';font-size:10px;line-height:1.2;color:#fff;
	/*box-shadow:2px 2px 4px rgba(0,0,0,0.3);-moz-box-shadow:2px 2px 4px rgba(0,0,0,0.3);-webkit-box-shadow:2px 2px 4px rgba(0,0,0,0.3);position:relative; */
}
.shadow mark{color:#111;}
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
#box1{
	width:100%;text-align:center;
	position:relative;
}
#block5{background:#9CCD4A;position:absolute;left:75px; top:175px;}
#block6{background:#EC108D;position:absolute;left:220px;top:165px;}
#block7{background:#00B8EE;position:absolute;left:370px;top:185px;}
#block8{background:#F8A530;position:absolute;left:520px;top:165px;}
select{margin-right:20px;}
#x,#y,#blur{width:60px;}
</style>

<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	$("select").change(function(){
		$("div.shadow").each(function(i,o){
			o=$(o);
			i=o.position();
			o.html("position : <mark>"+o.css("position")+" - "+i.left+" , "+i.top+"</mark><br />"
				  +"offsetParent : <mark>"+o.offsetParent().attr("tagName").toLowerCase()+"</mark><br />"
				  +"zIndex : <mark>"+o.css("zIndex")+"</mark>"
			);
		}).shadow({
			enabled:eval("("+$("#enabled option:selected").text()+")"),
			x:Number($("#x option:selected").text()),
			y:Number($("#y option:selected").text()),
			blur:Number($("#blur option:selected").text()),
			opacity:Number($("#opacity option:selected").text())
		});
	}).change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4>
<div class="box"><div id="block7" class="shadow">&nbsp;</div><div id="block5" class="shadow">&nbsp;</div><div id="block8" class="shadow">&nbsp;</div><div id="block6" class="shadow">&nbsp;</div></div>
</section>

<section>
<label for="enabled">enabled:</a></label><select class="en" id="enabled">
<option selected>true</option>
<option>false</option>
</select>
<label for="x">x:</a></label><select class="en" id="x">
<option>-4</option>
<option>-2</option>
<option>0</option>
<option selected>2</option>
<option>4</option>
</select>
<label for="y">y:</a></label><select class="en" id="y">
<option>-4</option>
<option>-2</option>
<option>0</option>
<option selected>2</option>
<option>4</option>
</select>
<label for="blur">blur:</a></label><select class="en" id="blur">
<option>0</option>
<option>1</option>
<option>2</option>
<option selected>3</option>
<option>4</option>
</select>
<label for="opacity">opacity:</a></label><select class="en" id="opacity">
<option>0.25</option>
<option selected>0.3</option>
<option>0.75</option>
<option>1</option>
</select>
</section>

<section>
<div class="box tr"><div id="block1" class="td shadow">&nbsp;</div><div id="block2" class="td shadow">&nbsp;</div><div id="block3" class="td shadow">&nbsp;</div><div id="block4" class="td shadow">&nbsp;</div></div>
</section>

<?php include 'leko.foot.inc'; ?>