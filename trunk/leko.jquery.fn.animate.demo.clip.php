<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<style>

a.banner{position:relative;display:block;width:56px;height:56px;padding:1px;border:1px solid #ddd;margin-right:20px;}
a.banner div{position:absolute;width:50px;height:50px;border:3px solid #f8f8f8;background:#333;line-height:50px;font-size:25px;text-align:center;}
a.banner nav{position:absolute;width:50px;height:50px;line-height:50px;font-size:25px;text-align:center;color:#fff;}

a#banner-1 div{color:#0D90BD;}
a#banner-2 div{color:#EC108D;}
a#banner-3 div{color:#F8A530;}
a#banner-4 div{color:#9CCD4A;}
a#banner-5 div{color:#FF8800;}

a#banner-1 nav{clip:rect(25px 25px 25px 25px);background-color:#0D90BD;}
a#banner-2 nav{clip:rect(auto auto auto 50px);background-color:#EC108D;}
a#banner-3 nav{clip:rect(auto 0px  auto auto);background-color:#F8A530;}
a#banner-4 nav{clip:rect(50px auto auto auto);background-color:#9CCD4A;}
a#banner-5 nav{clip:rect(auto auto 0px  auto);background-color:#FF8800;}

</style>

<?php include 'leko.body.php'; ?>

<br><br><div class="tr monospaced-font">

<a class="td banner" id="banner-1" href="#"><div><nav>1</nav>1</div></a>

<a class="td banner" id="banner-2" href="#"><div><nav>2</nav>2</div></a>

<a class="td banner" id="banner-3" href="#"><div><nav>3</nav>3</div></a>

<a class="td banner" id="banner-4" href="#"><div><nav>4</nav>4</div></a>

<a class="td banner" id="banner-5" href="#"><div><nav>5</nav>5</div></a>

</div>

<script>(function($,_,$$){$(function(){

	$("#banner-1 nav").animate({clip:"rect(auto auto auto auto)"},3000);
	
	$("#banner-2 nav").animate({clipLeft:"auto"},3000);
	
	$("#banner-3 nav").animate({clipRight:"50px"},3000);
	
	$("#banner-4 nav").animate({clipTop:"0px"},3000);
	
	$("#banner-5 nav").animate({clipBottom:"auto"},3000);
	
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

