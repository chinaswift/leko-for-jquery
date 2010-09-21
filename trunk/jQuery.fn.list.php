<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

ul.nav{margin:10px 0;}
ul.nav a:hover,ul.nav a:active,ul.nav a:focus{text-decoration:none;}

#list0{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list0 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0 5px 0;margin-right:30px;color:#333;}
#list0 li a:hover{color:#F8A530;}
#list0 li.selected a{color:#EC108D;}

</style>

<script src="leko.list.js"></script>

<script>

$(function(){

	$(".nav").list();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：基本功能</h4>
<ul id="list0" class="nav">
<li class="selected"><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>
</section>

<?php include 'leko.foot.inc'; ?>