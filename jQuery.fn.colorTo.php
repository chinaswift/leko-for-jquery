<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

select{margin-right:20px;}

#box{
	background:#efefef;padding:25px;
}

#block{
	width:600px;height:20px;padding:10px;
	background:#EC108D;border:10px solid #00B8EE;outline:#9CCD4A solid 10px;color:#F8A530;
}

</style>

<script>

$(function(){

	var x=$("select").change(function(){

		var
			f=$("#pn option:selected").text(),
			d=$("#dt option:selected").text(),
			c=$("#cr option:selected").text(),
			e=$("#es option:selected").text();

		$("#block")[f](c,d,e).html('$("#block").'+f+'(<mark>'+c+'</mark> , <mark>'+d+'</mark> , <mark>"'+e+'"</mark>);');

	});
	
	x.first().change();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>



<section><h4>例一：请选择插件和参数并实时查看效果变化</h4>
<div id="box"><div id="block" class="en">&nbsp;</div></div>
</section>

<section>
<label class="en" for="pn">Plugin Name:</a></label><select class="en" id="pn">
<option>colorTo</option>
<option selected>backgroundColorTo</option>
<option>borderColorTo</option>
<option>borderBottomColorTo</option>
<option>borderLeftColorTo</option>
<option>borderRightColorTo</option>
<option>borderTopColorTo</option>
<option>outlineColorTo</option>
</select>
<label class="en" for="cr">color:</a></label><select class="en" id="cr">
<option>black</option>
<option selected>#000</option>
<option selected>#EC108D</option>
<option>white</option>
<option>rgba(255,255,255,0.5)</option>
</select>
<label class="en" for="dt">duration:</a></label><select class="en" id="dt">
<option>200</option>
<option>400</option>
<option>600</option>
<option selected>800</option>
<option>1000</option>
<option>2000</option>
</select>
<label class="en" for="es">easing:</a></label><select class="en" id="es">
<option selected>swing</option>
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
<option>outbounce</option>
<option>inoutbounce</option>
<option>swing</option>
<option>linear</option>
</select>
</section>

<?php include 'leko.foot.inc'; ?>