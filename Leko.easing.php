<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<script src="leko.color.js"></script>
<script src="leko.effect.js"></script>

<style>

select{width:250px;margin-right:8px;}
#box{background:#efefef;width:800px;height:100px;position:relative;}
#block{position:absolute;width:50px;height:50px;background:#EC108D;top:25px;left:25px;}

</style>

<script>

$(function(){

	var
		b="-";
	$("select").change(function(){
		var
			v=$("select option:selected").first().text();
		$("#block").animate({
			"left":(b=b=="+"?"-":"+")+"=700px"
		},1200,v);
		$("#code").html('$("#block").animate({"left":"'+b+'=700px"},1200,"<mark>'+v+'</mark>");');
	}).change().next("button").click(function(){
		$("select").change();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择缓动类型</h4><div id="box"><div id="block">&nbsp;</div></div></section><section><code id="code">&nbsp;</code></section>
<section>
<select class="en">
<option>inquad</option>
<option>outquad</option>
<option>inoutquad</option>
<option>incubic</option>
<option>outcubic</option>
<option>inoutcubic</option>
<option>inquart</option>
<option>outquart</option>
<option>inoutquart</option>
<option>inquint</option>
<option>outquint</option>
<option>inoutquint</option>
<option>insine</option>
<option>outsine</option>
<option>inoutsine</option>
<option>inexpo</option>
<option>outexpo</option>
<option>inoutexpo</option>
<option>incirc</option>
<option>outcirc</option>
<option>inoutcirc</option>
<option>inelastic</option>
<option>outelastic</option>
<option>inoutelastic</option>
<option>inback</option>
<option>outback</option>
<option>inoutback</option>
<option>inbounce</option>
<option selected="true">outbounce</option>
<option>inoutbounce</option>
<option>swing</option>
<option>linear</option>
</select><button>再来一次</button>
</section>

<?php include 'leko.foot.inc'; ?>