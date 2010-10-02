<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.nav{margin:15px 0;}
.nav a:hover,.nav a:active,.nav a:focus{text-decoration:none;}

#list0{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list0 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list0 li.hovered a{color:#F8A530;}
#list0 li.checked a{color:#EC108D;}

#list1{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list1 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list1 li.hovered a{color:#F8A530;}
#list1 li.checked a{color:#EC108D;}

#list2{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list2 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list2 li.deco{border-bottom:4px solid #000;display:none;}

#list3{background:url("bk02.gif") no-repeat;height:29px;width:550px;padding:15px 0 15px 30px;}
#list3 li,#list3 li a{height:29px;}
#list3 li a{font-size:14px;font-weight:bold;letter-spacing:1px;color:#fff;padding:0 15px;line-height:29px;}
#list3 li.deco{background:url("bk03.gif") no-repeat top left;position:relative;}
#list3 li.deco a{background:url("bk03.gif") no-repeat right -30px;position:absolute;right:-1px;}

#list4{border:1px solid #dfdfdf;padding:15px;width:300px;}
#list4 li{display:block;height:30px;}
#list4 li a{height:30px;line-height:30px;padding:0 15px;color:#333;}
#list4 li.deco{background:#dfdfdf;}

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

<section><h4>例一：基本功能</h4>

<ul id="list0" class="nav">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li class="checked"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

<ul id="list1" class="nav" list="event:1">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li class="checked"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

</section>

<section><h4>例二：扩展效果</h4>

<ul id="list2" class="nav" list="inner:1,effect:['lava','lamp'],speed:1000,lava:{borderBottomColor:'#999'},lamp:{color:'#999'}">
<li><a href="#">新闻</a></li>
<li li="lamp:{color:'#00B8EE'},lava:{borderBottomColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="lamp:{color:'#EC108D'},lava:{borderBottomColor:'#EC108D'}"><a href="#">欧洲进口洁具</a></li>
<li li="lamp:{color:'#F8A530'},lava:{borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li class="checked" li="lamp:{color:'#9CCD4A'},lava:{borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lamp:{color:'#FF8800'},lava:{borderBottomColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ul>

<ul id="list3" class="nav" list="effect:'lava'">
<li class="deco"><a href="#">&nbsp;</a></li>
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

</section>

<section><h4>例三：竖导航栏</h4>

<ol id="list4" class="nav" list="vertical:1,effect:'lava',lava:{background:'#dfdfdf',color:'#000'}">
<li><a href="#">新闻</a></li>
<li li="lava:{background:'#00B8EE'}"><a href="#">房地产</a></li>
<li class="checked" li="lava:{background:'#EC108D'}"><a href="#">欧洲进口洁具</a></li>
<li li="lava:{background:'#F8A530'}"><a href="#">美食</a></li>
<li li="lava:{background:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="lava:{background:'#FF8800'}"><a href="#">奢侈品</a></li>
</ol>

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