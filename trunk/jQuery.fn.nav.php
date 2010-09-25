<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

ul.nav{margin:15px 0;}
ul.nav a:hover,ul.nav a:active,ul.nav a:focus{text-decoration:none;}

#list0{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list0 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list0 li.hovered  a{color:#F8A530;}
#list0 li.selected a{color:#EC108D;}

#list1{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list1 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list1 li.hovered  a{color:#F8A530;}
#list1 li.selected a{color:#EC108D;}

#list2{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list2 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list2 li.deco{border-bottom:4px solid #000;}

#list3{background:url("bk02.gif") no-repeat;height:29px;width:550px;padding:15px 0 15px 30px;}
#list3 li,#list3 li a{height:29px;}
#list3 li a{font-size:14px;font-weight:bold;letter-spacing:1px;color:#fff;padding:0 15px;line-height:29px;}
#list3 li.deco{background:url("bk03.gif") no-repeat top left;position:relative;}
#list3 li.deco a{background:url("bk03.gif") no-repeat right -30px;position:absolute;right:-1px;}

#list4{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list4 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 15px;color:#333;}
#list4 li.deco{opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);background:#fff;}

</style>

<script src="leko.nav.js"></script>

<script>

$(function(){

	$(".nav").nav();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：基本功能</h4>

<ul id="list0" class="nav">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li class="selected"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

<ul id="list1" class="nav" nav="hover:1">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li class="selected"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

</section>

<section><h4>例二：内置效果</h4>

<ul id="list2" class="nav" nav="selected:4,fn:['lava','lamp'],inner:{w:1},speed:1000,lava:{borderBottomColor:'#999'},lamp:{color:'#999'}">
<li><a href="#">新闻</a></li>
<li li="lamp:{color:'#00B8EE'},lava:{borderBottomColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="lamp:{color:'#EC108D'},lava:{borderBottomColor:'#EC108D'}" class="selected"><a href="#">欧洲进口洁具</a></li>
<li li="lamp:{color:'#F8A530'},lava:{borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li li="lamp:{color:'#9CCD4A'},lava:{borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lamp:{color:'#FF8800'},lava:{borderBottomColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ul>

<ul id="list3" class="nav" nav="fn:'lava'">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li class="selected"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

<ul id="list4" class="nav" nav="fn:['lamp','lade'],hover:1,fx:'swing',allwaysShowSelect:1,speed:800,lamp:{color:'#fff'},lade:{opacity:1,background:'#aaa'}">
<li><a href="#">新闻</a></li>
<li li="lade:{backgroundColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="lade:{backgroundColor:'#EC108D'}" class="selected"><a href="#">欧洲进口洁具</a></li>
<li li="lade:{backgroundColor:'#F8A530'}"><a href="#">美食</a></li>
<li li="lade:{backgroundColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lade:{backgroundColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ul>

</section>

<?php include 'leko.foot.inc'; ?>