<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{
	background:#efefef;padding:25px;
}
.block{
	width:200px;height:100px;background:#EC108D;border:10px solid #00B8EE;padding:10px;color:#fff;
}
select{margin-right:15px;}
.block mark{
	color:#ff0;
}
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
			o=$("#block1");

		$("#code1").html('$("#block1").<mark>resizeTo</mark>('+w+','+h+','+b+')');

		o.resizeTo(w,h,b).html('width :<mark>'+o.css('width')+'</mark><br />height:<mark>'+o.css('height')+'</mark><br />outerWidth :<mark>'+o.outerWidth()+'px</mark><br />outerHeight:<mark>'+o.outerHeight()+'px</mark>');

	}).click();


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
<option>200</option>
<option>150</option>
<option>100</option>
</select>
<label class="en" for="b">outer:</a></label><select class="en" id="b">
<option>true</option>
<option selected>false</option>
</select><button class="en" id="button1">Click me to Resize it !</button>
</section>

<?php include 'leko.foot.inc'; ?>