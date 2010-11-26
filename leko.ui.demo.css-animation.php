<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<script src="leko.ui.js"></script>

<style>

a#banner-1{display:block;width:156px;height:156px;padding:1px;border:1px solid #ddd;}
a#banner-1 div{width:144px;height:144px;border:3px solid #f8f8f8;padding:3px;background:url("banner-01.jpg") no-repeat right top;}

a#banner-2{position:relative;display:block;width:156px;height:156px;padding:1px;border:1px solid #ddd;}
a#banner-2 div{position:absolute;width:150px;height:150px;border:3px solid #f8f8f8;background:url("banner-01.jpg") no-repeat left  top;}
a#banner-2 nav{position:absolute;width:150px;height:150px;background:url("banner-01.jpg") no-repeat -150px top;clip:rect(75px 75px 75px 75px);}

#txt-ui{background:#fff;border:2px solid #ddd;width:300px;color:#666;height:22px;line-height:22px;}

</style>

<?php include 'leko.body.php'; ?>

<br><br>

<a id="banner-1" href="#"><div>&nbsp;</div></a>

<br><br>

<a id="banner-2" href="#"><div><nav>&nbsp;</nav></div></a>

<br><br>

<input type="text" class="txt" id="txt-ui" value=" 微博地址 http://blog.sina.com.cn/rainersu" />

<script>(function($,_,$$){$(function(){

	/*$("#txt-ui").ui();
	$("#txt-ui").mouseenter(function(){
		$$(this,"ui").skin({duration:2000},"hover",{backgroundColor:"red"});
	}).mouseleave(function(){
		$$(this,"ui").skin({duration:2000});
	}).focusin(function(){
		$$(this,"ui").skin({duration:2000},"focus",{backgroundColor:"green"});
	}).focusout(function(){
		$$(this,"ui").skin({duration:2000});
	});*/

	$("#banner-1").mouseenter(function(){
		$("#banner-1>div").stop(true).animate({backgroundPositionX: "left"},1000,"outquad");
	}).mouseleave(function(){
		$("#banner-1>div").stop(true).animate({backgroundPositionX:"right"},1000,"outquad");
	});

	$("#banner-2").mouseenter(function(){
		$("#banner-2 nav").stop(true).animate({clip:"rect(auto auto auto auto)"},1000,"outquad");
	}).mouseleave(function(){
		$("#banner-2 nav").stop(true).animate({clip:"rect(75px 75px 75px 75px)"},1000,"outquad");
	});
					
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

