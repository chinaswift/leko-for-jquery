<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<script src="leko.nav.js"></script>

<style>

.nav-h{border:1px solid #d2d3ce;padding:10px;height:35px;}
.nav-h a{height:15px;padding:10px 20px;color:#7b7b71;*float:left;}
.nav-h li{height:35px;}
.nav-h li.visited a{background:#efefef;}
.nav-h li.selected a{color:#ff436f;}
.nav-h a:hover{color:#00b8ee;}

.nav-v{width:260px;border:1px solid #d2d3ce;padding:10px;}
.nav-v a{padding:10px 20px;color:#7b7b71;}
.nav-v li.visited a{background:#efefef;}
.nav-v li.selected a{color:#ff436f;}
.nav-v a:hover{color:#00b8ee;}

.nav-z{width:260px;border:1px solid #d2d3ce;padding:10px;height:35px;}
.nav-z li{left:10px;top:10px;height:35px;width:260px;}
.nav-z a{padding:10px 20px;color:#7b7b71;}
.nav-z li.visited a{background:#efefef;}
.nav-z li.selected a{color:#ff436f;}
.nav-z a:hover{color:#00b8ee;}

</style>

<?php include 'leko.body.php'; ?>

<br><br>

<ul class="nav-h nav" id="nav-1" data-leko-nav="event:1">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li class="selected"><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li><a href="#">联系我们</a></li>
</ul>

<br>

<ol class="nav-v nav" id="nav-2">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li><a href="#">联系我们</a></li>
</ol>

<br>

<ol class="nav-z nav" id="nav-3">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li class="selected"><a href="#">联系我们</a></li>
</ol>

<br>

<button id="btn-add">增加一个列表项</button>
<button id="btn-del">删除当前选中项</button>
<button id="btn-select">选中最后一项</button>
<button id="btn-slideshow">开始/停止幻灯片</button>

<script>(function($,_,$$){$(function(){
		
	$(".nav").nav({speed:1000}).bind("navvisit",function(e,o,r){
		//console.log(o);
	});
	
	$("#btn-add").click(function(){
		$(".nav").each(function(i,e){
			$$(e,"nav").add("<li><a href='#'>新增的项目</a></li>");
		});
	});	
	
	$("#btn-del").click(function(){
		$(".nav").each(function(i,e){
			$$(e,"nav").del('.selected');
		});
	});

	$("#btn-select").click(function(){
		$(".nav").each(function(i,e){
			var
				c=$$(e,"nav");
			c.select(300);
		});
	});
	
	$("#btn-slideshow").click(function(){
		$(".nav").each(function(i,e){
		var
			c=$$(e,"nav");
			c.slideshow(!c.sliding);
		});
	});
					
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

