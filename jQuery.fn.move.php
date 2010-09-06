<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>
<style>
.box{background:#efefef;width:800px;height:50px;padding:25px;}
#popup,#popup2{width:50px;height:50px;background:#00B8EE;position:absolute;z-index:1;left:0px;top:0px;display:none;}
#block{background:#EC108D;color:#fff;display:block;height:30px;}
#txt1 mark{color:#ff0;}
#link{background:#9CCD4A;}
select{margin-right:20px;}
</style>
<script src="leko.color.js"></script>
<script src="leko.popup.js"></script>
<script>

$(function(){

	var
		x,y,a,b;
	
	$("select").change(function(e){

		var
			o=$("#o option:selected").text();
		x=Number($("#posX option:selected").text());
		y=Number($("#posY option:selected").text());
		a=Number($("#offsetX option:selected").text());
		b=Number($("#offsetY option:selected").text());
		if(o=="window")o=window;
		else if(o=="document")o=document;
		else o="#"+o;

		$("#link").html('$("#popup").move("'+o+'",'+x+','+y+','+a+','+b+');');
		
		$("#popup").move($(o),x,y,a,b).show();//.over("#block");

	}).first().change();

	$("#box2").click(function(e){
		$("#popup2").move(e,x,y,a,b).show();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4>
<div id="popup">&nbsp;</div><div id="box" class="box"><code id="block"><a href="#" id="link">&nbsp;</a></code></div>
</section>

<section>
<label class="en" for="o">target:</a></label><select class="en" id="o">
<option>box</option>
<option>block</option>
<option selected>link</option>
<option>window</option>
<option>document</option>
</select><label class="en" for="posX">posX:</a></label><select class="en" id="posX">
<option>null</option>
<option>0</option>
<option selected>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
<label class="en" for="posY">posY:</a></label><select class="en" id="posY">
<option>null</option>
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

<hr />

<section><h4>例二：请在灰色区域内任意处单击鼠标</h4>
<div id="popup2">&nbsp;</div><div id="box2" class="box">&nbsp;</div>
</section>

<?php include 'leko.foot.inc'; ?>