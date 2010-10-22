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

<script>

$(function(){

	$("#button2").click(function(){

		var
			o=$("#o option:selected").text(),
			w=Number($("#w option:selected").text()),
			h=Number($("#h option:selected").text()),
			a=Number($("#a option:selected").text()),
			b=Number($("#b option:selected").text());
		if(o=="window")o=window;
		else if(o=="document")o=document;
		else o="#"+o;

		$("#code2").html('$("#box3").<mark>resize</mark>("'+o+'",'+w+','+h+','+a+','+b+');');
		
		$("#box3").resize($(o),w,h,a,b);

	}).click();

	$("#button4").click(function(){
		$("#box3").resizeTo(50,50,0,1);
		$("#target,#w,#h,#a,#b").attr("selectedIndex",0);
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
<label class="en" for="o">target:</a></label><select class="en" id="o">
<option selected>box1</option>
<option>box2</option>
<option>box3</option>
<option>window</option>
<option>document</option>
</select>
<label class="en" for="w">wSet:</a></label><select class="en" id="w">
<option selected>2</option>
<option>1</option>
<option>0</option>
<option>null</option>
</select>
<label class="en" for="h">hSet:</a></label><select class="en" id="h">
<option selected>2</option>
<option>1</option>
<option>0</option>
<option>null</option>
</select>
<label class="en" for="a">offsetW:</a></label><select class="en" id="a">
<option selected>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
</select>
<label class="en" for="b">offsetH:</a></label><select class="en" id="b">
<option selected>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
</select>
<button class="en" id="button2">Resize !</button><button class="en" id="button4">Reset !</button>
</section>

<?php include 'leko.foot.inc'; ?>