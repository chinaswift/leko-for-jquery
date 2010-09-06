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

	$("#button1").click(function(){
		var
			w=eval("("+$("#w option:selected").text()+")"),
			h=eval("("+$("#h option:selected").text()+")"),
			b=eval("("+$("#b option:selected").text()+")"),
			r=eval("("+$("#r option:selected").text()+")"),
			o=$("#block1");
		
		
		$("#code1").html('$("#block1").<mark>resizeTo</mark>('+w+','+h+','+(r?'['+r+']':r)+','+b+')');
		o.resizeTo(w,h,r,b).html('width :<mark>'+o.css('width')+'</mark><br />height:<mark>'+o.css('height')+'</mark><br />outerWidth :<mark>'+o.outerWidth()+'px</mark><br />outerHeight:<mark>'+o.outerHeight()+'px</mark>');

	}).click();
	$("#button3").click(function(){
		$("#block1").resizeTo(200,100,0,1);
		$("#w,#h,#b,#r").attr("selectedIndex",0);
		$("#button1").click();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一</h4><div class="block en" id="block1">&nbsp;</div></section>

<section><code id="code1"></code></section>

<section>
<label class="en" for="w">width:</a></label><select class="en" id="w">
<option selected>null</option>
<option>300</option>
<option>250</option>
<option>200</option>
</select>
<label class="en" for="h">height:</a></label><select class="en" id="h">
<option selected>null</option>
<option>250</option>
<option>200</option>
<option>150</option>
</select>
<label class="en" for="r">bound:</a></label><select class="en" id="r">
<option selected>null</option>
<option>[50,250,150,50]</option>
</select>
<label class="en" for="b">not-outer:</a></label><select class="en" id="b">
<option selected>false</option>
<option>true</option>
</select><button class="en" id="button1">Resize !</button><button class="en" id="button3">Reset !</button>
</section>

<?php include 'leko.foot.inc'; ?>