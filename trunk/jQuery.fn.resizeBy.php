<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>
.box{background:#efefef;padding:25px;}
.block{width:200px;height:100px;background:#EC108D;border:10px solid #00B8EE;padding:10px;color:#fff;}
select,button{margin-right:15px;}
.block mark{color:#ff0;}
</style>

<script>

$(function(){

	$("#button1").click(function(){

		var
			w=eval("("+$("#w option:selected").text()+")"),
			h=eval("("+$("#h option:selected").text()+")"),
			r=eval("("+$("#r option:selected").text()+")"),
			o=$("#block1");

		$("#code1").html('$("#block1").<mark>resizeBy</mark>('+w+','+h+','+(r?'['+r+']':r)+')');

		o.resizeBy(w,h,r).html('width :<mark>'+o.css('width')+'</mark><br />height:<mark>'+o.css('height')+'</mark><br />outerWidth :<mark>'+o.outerWidth()+'px</mark><br />outerHeight:<mark>'+o.outerHeight()+'px</mark>');

	}).click();
	$("#button3").click(function(){
		$("#block1").resizeTo(200,100,0,1);
		$("#w,#h,#r").attr("selectedIndex",0);
		$("#button1").click();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>



<section><h4>例一</h4><div class="block en" id="block1">&nbsp;</div></section>

<section><code id="code1"></code></section>

<section>
<label class="en" for="w">increase of width:</a></label><select class="en" id="w">
<option selected>null</option>
<option>10</option>
<option>20</option>
</select>
<label class="en" for="h">increase of height:</a></label><select class="en" id="h">
<option selected>null</option>
<option>10</option>
<option>20</option>
</select>
<label class="en" for="r">bound:</a></label><select class="en" id="r">
<option selected>null</option>
<option>[50,250,150,50]</option>
</select><button class="en" id="button1">Resize !</button><button class="en" id="button3">Reset !</button>
</section>

<?php include 'leko.foot.inc'; ?>