<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>
<style>
.box{
	background:#efefef;width:800px;height:50px;padding:25px;
}
#popup{
	width:50px;height:50px;background:#00B8EE;position:absolute;z-index:1;left:0px;top:0px;
}
#block{
	background:#EC108D;color:#fff;height:30px;
}
#txt1 mark{
	color:#ff0;
}
select{margin-right:20px;}
</style>
<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	$("select").change(function(){

		var
			x=Number($("#posX option:selected").text()),
			y=Number($("#posY option:selected").text()),
			a=Number($("#offsetX option:selected").text()),
			b=Number($("#offsetY option:selected").text());

		$("#block").html('$("#popup").locate("#block",'+x+','+y+','+a+','+b+');').shadow();
		
		$("#popup").locate("#block",x,y,a,b).bubble("#block").shadow();

	}).first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4>
<div id="popup">&nbsp;</div><div class="box"><code id="block">&nbsp;</code></div>
</section>

<section>
<label class="en" for="posX">posX:</a></label><select class="en" id="posX">
<option>0</option>
<option selected>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
<label class="en" for="posY">posY:</a></label><select class="en" id="posY">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
</select>
<label class="en" for="offsetX">offsetX:</a></label><select class="en" id="offsetX">
<option>-6</option>
<option>-5</option>
<option>-4</option>
<option>-3</option>
<option>-2</option>
<option>-1</option>
<option selected>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
</select>
<label class="en" for="offsetY">offsetY:</a></label><select class="en" id="offsetY">
<option>-6</option>
<option>-5</option>
<option>-4</option>
<option>-3</option>
<option>-2</option>
<option>-1</option>
<option selected>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
</select>
</section>

<?php include 'leko.foot.inc'; ?>