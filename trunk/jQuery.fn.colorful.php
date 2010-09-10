<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

#demo1,#demo2,#demo3{
	background:#f5f5f5;padding:25px;
}
#demo1 div#box{
	width:160px;height:160px;background:#1A1819 url("bk01.gif");
}
#demo1 div#block{
	width:100px;height:100px;padding:20px;border:10px solid #00B8EE;color:#fff;
}
#demo1 div#config{
	padding-left:25px;
}
#demo1 li{
	padding-bottom:5px;
}
#demo1 h3{
	color:#EC108D;
}
#demo2 a{
	color:#1389EE;font-size:14px;text-decoration:none;
}
#demo2 a:hover{
	text-decoration:none;
}
#demo3 input{
	border:2px solid #00B8EE;width:200px;
}

</style>

<script src="leko.colorful.js"></script>
<script>

$(function(){

	var x=$("select").change(function(){
		var
			d=Number($("#duration option:selected").text()),
			a=$("#easing option:selected").text(),
			c=$("#color option:selected").text(),
			b=$("#borderColor option:selected").text(),
			k=$("#backgroundColor option:selected").text();
		$("#block").colorful({
			properties:{
				color:c,
				borderColor:b,
				backgroundColor:k
			},
			duration:d,
			easing:a
		});
		$("#code").html('$("#block").colorful({properties:{color:<mark>'
		               +c+'</mark>,borderColor:<mark>'
					   +b+'</mark>,backgroundColor:<mark>'
					   +k+'</mark>},duration:<mark>'
					   +d+'</mark>,easing:<mark>'
					   +a+'</mark>});');
	});
	
	x.first().change();

	$("#demo2").colorful({
		live:"a",
		properties:{
			color:"#EC108D",
			backgroundColor:'#FEEF26'
		}
	});

	$("#button1").click(function(){
		$('<a href="#">新建的一些文本</a><br /><br />').appendTo("#demo2");
	});

	$("#demo3").colorful({
		live:"input:text",
		focus:1,
		properties:{
			borderColor:"#EC108D",
			backgroundColor:'#FEEE69'
		}
	});

	$("#button2").click(function(){
		$('<input value="新建的文本输入框" /><br /><br />').appendTo("#demo3").focus();
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请尝试修改参数，然后将鼠标移入移出下面的块元素区域查看效果</h4>
<div id="demo1" class="tr"><div class="td" id="box"><div id="block"><h3>标题</h3>这里有一些文本。</div></div>
<div class="td" id="config"><ol>
<li><label class="en" for="duration">duration:</a></label><select class="en" id="duration">
<option>200</option>
<option>400</option>
<option>600</option>
<option selected>800</option>
<option>1000</option>
<option>2000</option>
</select></li>
<li><label class="en" for="easing">easing:</a></label><select class="en" id="easing">
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
</select></li>
<li><label class="en" for="color">color:</a></label><select class="en" id="color">
<option>black</option>
<option selected>#000</option>
<option>red</option>
<option>rgba(0,0,0,0.5)</option>
</select></li>
<li><label class="en" for="borderColor">borderColor:</a></label><select class="en" id="borderColor">
<option>#F8A530</option>
<option>#00B8EE</option>
<option selected>#EC108D</option>
<option>#EC108D</option>
<option>#9CCD4A</option>
</select></li>
<li><label class="en" for="backgroundColor">backgroundColor:</a></label><select class="en" id="backgroundColor">
<option>#F8A530</option>
<option selected>rgba(245,206,222,0.5)</option>
<option>#EC108D</option>
</select></li>
</ol></div></div></section>

<section><code id="code">&nbsp;</code></section>

<hr />

<section><h4>例二：尝试将鼠标移到下面的超链接文本之上，然后再创建一些新的，继续尝试</h4><div id="demo2">
<a href="#">文本</a><br /><br />
<a href="#" style="color:#632C91;" colorful="properties:{color:'#000',backgroundColor:'#9CCD4A'}">还是一些文本</a><br /><br />
</div><br /><button id="button1">创建新的文本链接</button></section>

<hr />

<section><h4>例三：尝试将输入焦点定位到下面的文本框中，然后再创建一些新的，继续尝试</h4><div id="demo3">
<input /><br /><br />
<input style="background:#C4E9FB" /><br /><br />
</div><br /><button id="button2">创建新文本输入框</button></section>

<?php include 'leko.foot.inc'; ?>