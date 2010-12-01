<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<style>

a.banner{position:relative;display:block;width:156px;height:156px;padding:1px;border:1px solid #ddd;margin-right:20px;}
a.banner div{position:absolute;width:150px;height:150px;border:3px solid #f8f8f8;background:#333 url("banner-01.jpg");}

a#banner-2 div{background-position:0 -150px;}

</style>

<?php include 'leko.body.php'; ?>

<br><br><div class="tr monospaced-font">

<a class="td banner" id="banner-1" href="#"><div>&nbsp;</div></a>

<a class="td banner" id="banner-2" href="#"><div>&nbsp;</div></a>

<a class="td banner" id="banner-3" href="#"><div>&nbsp;</div></a>

</div>

<script>(function($,_,$$){$(function(){

	$("#banner-1 div").animate({backgroundPositionX:"-150px"},3000);
	
	$("#banner-2 div").animate({backgroundPositionY:0},3000);
	
	$("#banner-3 div").animate({backgroundPositionX:"-150px",backgroundPositionY:"-150px"},3000);
	
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

