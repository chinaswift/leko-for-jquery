<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.nav{margin:15px 0;}
.nav a:hover,.nav a:active,.nav a:focus{text-decoration:none;}

#list2{border:1px solid #dfdfdf;padding:15px 0 11px 0;width:550px;}
#list2 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0;margin:0 15px;color:#333;border-bottom:4px solid #fff;}

#list5{border:1px solid #dfdfdf;padding:15px;width:300px;}
#list5 li{display:block;height:30px;}
#list5 li a{height:30px;line-height:30px;padding:0 15px;color:#333;background:#fff;}

</style>

<script src="leko.list.js"></script>

<script>

$(function(){

	$(".nav").nav();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：横导航栏</h4>

<ul id="list2" class="nav" list="inner:1,effect:'lamp',fx:'swing',speed:400,lamp:{color:'#999',borderBottomColor:'#999'}">
<li><a href="#">新闻</a></li>
<li li="lamp:{color:'#00B8EE',borderBottomColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="lamp:{color:'#EC108D',borderBottomColor:'#EC108D'}"><a href="#">欧洲进口洁具</a></li>
<li li="lamp:{color:'#F8A530',borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li class="checked" li="lamp:{color:'#9CCD4A',borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lamp:{color:'#FF8800',borderBottomColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ul>

</section>

<section><h4>例二：竖导航栏</h4>

<ol id="list5" class="nav" list="vertical:1,effect:'lamp',fx:'linear',speed:400,lamp:{backgroundColor:'#dfdfdf',color:'#000'}">
<li><a href="#">新闻</a></li>
<li li="lamp:{backgroundColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="lamp:{backgroundColor:'#EC108D'}"><a href="#">欧洲进口洁具</a></li>
<li li="lamp:{backgroundColor:'#F8A530'}"><a href="#">美食</a></li>
<li class="checked" li="lamp:{backgroundColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lamp:{backgroundColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ol>

</section>

<?php include 'leko.foot.inc'; ?>