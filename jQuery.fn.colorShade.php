<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

#demo1{
	width:160px;height:160px;background:#1A1819 url("bk01.gif");
}
#demo1 div{
	width:100px;height:100px;padding:20px;border:10px solid #00B8EE;color:#fff;
}
#demo1 div h3{
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

<script src="leko.color.js"></script>

<script>

$(function(){

	$("#demo1 div").colorShade({
		properties:{
			color:"black",
			borderColor:"#EC108D",
			backgroundColor:"rgba(245,206,222,0.5)"
		},
		duration:1000
	});
	
	$("#demo2").colorShade({
		live:1,
		selector:"a",
		properties:{
			color:"#EC108D",
			backgroundColor:'#FEEF26'
		}
	});

	$("#button1").click(function(){
		$('<a href="#">新建的一些文本</a><br /><br />').appendTo("#demo2");
	});

	$("#demo3").colorShade({
		live:1,
		focus:1,
		selector:"input:text",
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

<section><h4>例一：请将鼠标移入再移出下面的块元素区域</h4><div id="demo1"><div><h3>标题</h3>这里有一些文本。</div></div></section>

<hr />

<section><h4>例二：尝试将鼠标移到下面的超链接文本之上，然后再创建一些新的，继续尝试</h4><div id="demo2">
<a href="#">文本</a><br /><br />
<a href="#" style="color:#632C91;" colorShade="properties:{backgroundColor:'#9CCD4A'}">还是一些文本</a><br /><br />
</div><br /><button id="button1">创建新的文本链接</button></section>

<hr />

<section><h4>例三：尝试将输入焦点定位到下面的文本框中，然后再创建一些新的，继续尝试</h4><div id="demo3">
<input /><br /><br />
<input style="background:#C4E9FB" /><br /><br />
</div><br /><button id="button2">创建新文本输入框</button></section>

<?php include 'leko.foot.inc'; ?>