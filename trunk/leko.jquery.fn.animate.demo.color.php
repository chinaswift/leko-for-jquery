<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<style>

a.banner{position:relative;display:block;width:56px;height:56px;padding:1px;border:1px solid #ddd;margin-right:20px;}
a.banner div{position:absolute;width:50px;height:50px;border:3px solid #f8f8f8;background:#333;}
a.banner nav{position:absolute;font-size:25px;text-align:center;}

a#banner-1 nav{width:50px;height:50px;color:#0D90BD;line-height:50px;}
a#banner-2 nav{width:50px;height:40px;color:#EC108D;line-height:40px;border-top:10px solid #333;}
a#banner-3 nav{width:40px;height:50px;color:#F8A530;line-height:50px;border-right:10px solid #333;}
a#banner-4 nav{width:50px;height:40px;color:#9CCD4A;line-height:40px;border-bottom:10px solid #333;}
a#banner-5 nav{width:40px;height:50px;color:#FF8800;line-height:50px;border-left:10px solid #333;}

div#paragraph-1{border:1px solid #ddd;padding:3px;letter-spacing:1px;}
div#paragraph-1 div{padding:10px;background-color:#f5f5f5;}
div#paragraph-1 a{color:#10B4EC;}

div#paragraph-2{border:1px solid #ddd;padding:3px;letter-spacing:1px;}
div#paragraph-2 div{padding:10px;background-color:#333;color:#fff;}
div#paragraph-2 a{color:#10B4EC;}

</style>

<?php include 'leko.body.php'; ?>

<br><br><div class="tr">

<a class="td banner" id="banner-1" href="#"><div><nav class="monospaced-font">1</nav></div></a>

<a class="td banner" id="banner-2" href="#"><div><nav class="monospaced-font">2</nav></div></a>

<a class="td banner" id="banner-3" href="#"><div><nav class="monospaced-font">3</nav></div></a>

<a class="td banner" id="banner-4" href="#"><div><nav class="monospaced-font">4</nav></div></a>

<a class="td banner" id="banner-5" href="#"><div><nav class="monospaced-font">5</nav></div></a>

</div>

<br><br><div id="paragraph-1"><div>这是一段包含<a href="#">超链接</a>的文本。请将鼠标移动到这些<a href="#">超链接</a>之上查看效果。</div></div>

<br><br><div id="paragraph-2"><div>这是一段包含<a href="#">超链接</a>的文本。请将鼠标移动到这些<a href="#">超链接</a>之上查看效果。</div></div>

<script>(function($,_,$$){$(function(){

	$("#banner-1 nav").animate({backgroundColor:"#0D90BD",color:"#f5f5f5"},3000);
	
	$("#banner-2 nav").animate({borderTopColor:"#EC108D",color:"#f5f5f5"},3000);
	
	$("#banner-3 nav").animate({borderRightColor:"#F8A530",color:"#f5f5f5"},3000);
	
	$("#banner-4 nav").animate({borderBottomColor:"#9CCD4A",color:"#f5f5f5"},3000);
	
	$("#banner-5 nav").animate({borderLeftColor:"#FF8800",color:"#f5f5f5"},3000);
	
	$("#paragraph-1 a").mouseenter(function(){
		$(this).stop(true).animate({backgroundColor:"#FFF5DF",color:"#EC108D"},1000);
	}).mouseleave(function(){
		$(this).stop(true).animate({backgroundColor:"transparent",color:"#10B4EC"},1000);
	});

	$("#paragraph-2 a").mouseenter(function(){
		$(this).stop(true).animate({backgroundColor:"#000",color:"#EC108D"},1000);
	}).mouseleave(function(){
		$(this).stop(true).animate({backgroundColor:"transparent",color:"#10B4EC"},1000);
	});
		
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

