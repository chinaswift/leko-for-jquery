<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>
<style>
.box{
	background:#efefef;width:800px;height:50px;padding:25px;
}
#menu1{
	/*display:none;*/
	width:75px;height:75px;background:#00B8EE;border:1px solid;border-color:rgba(255,255,255,0.75);border-color:#f5f5f5\9;position:absolute;z-index:1;left:0px;
}
#txt1{
	background:#EC108D;color:#fff;border:1px solid;border-color:rgba(255,255,255,0.75);border-color:#f5f5f5\9;
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

	var x=$("select").change(function(){

		/*var
			a=Number($("#posX option:selected").text()),
			b=Number($("#posY option:selected").text()),
			x=Number($("#offsetX option:selected").text()),
			y=Number($("#offsetY option:selected").text());

		$("#txt1").html('$("#block").popup({posX:<mark>'+a+'</mark>,posY:'+b+'</mark>,offsetX:<mark>'+x+'</mark>,offsetY:<mark>'+y+'</mark>,target:<mark>#txt1</mark>});').shadow();
		
		$("#block").popup({
			posX:a,
			posY:b,
			offsetX:x,
			offsetY:y,
			target:"#txt1"
		});*/

		//$("#menu1").menu();
		$("body").delegate(".www","click",function(){
			alert(this);
		});

	});
	
	x.first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?><div style="background:">


<div style="position:absolute;background:black;width:300px;height:200px;left:100px;top:10px;z-index:1;">
<div style="position:absolute;background:gray;width:300px;height:180px;left:0px;top:0px;z-index:auto;" class="www">

<div style="position:absolute;background:red;width:50px;height:50px;z-index:3;left:40px;top:20px;">3</div>
<div style="position:absolute;background:green;width:50px;height:50px;left:0px;top:25px;">auto</div>
<div style="position:absolute;background:blue;width:50px;height:50px;z-index:-1;left:25px;top:160px;">-1</div>
<div style="position:absolute;background:yellow;width:50px;height:50px;z-index:0;left:25px;top:35px;">1</div>

</div>
</div>
<section><h4>例一：请选择参数并实时查看效果变化</h4>
<div id="menu1">&nbsp;</div><div class="box"><code id="txt1">&nbsp;</code></div>
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