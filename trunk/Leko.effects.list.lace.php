<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.nav{margin:15px 0;}
.nav a:hover,.nav a:active,.nav a:focus{text-decoration:none;}

#list2{background:url('bk03.png') no-repeat;padding:0 15px;width:550px;}
#list2 li a{font-size:13px;font-weight:bold;letter-spacing:1px;height:23px;line-height:20px;padding:0 15px;color:#333;}
#list2 li.deco{background:url('bk04.png') repeat-x top left;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);}

#list3{background:url("bk02.gif") no-repeat;height:29px;width:550px;padding:15px 0 15px 30px;}
#list3 li,#list3 li a{height:29px;}
#list3 li a{font-size:14px;font-weight:bold;letter-spacing:1px;color:#fff;padding:0 15px;line-height:29px;}
#list3 li.deco{background:url("bk03.gif") no-repeat top left;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);}
#list3 li.deco a{background:url("bk03.gif") no-repeat right -30px;position:absolute;right:-1px;}

#list4{background:#71828a;width:278px;padding:5px;}
#list4 li{display:block;height:35px;font-size:14px;font-weight:bold;}
#list4 li a{height:35px;line-height:32px;color:#fff;padding:0 15px;zoom:1;}
#list4 li.deco{background:url('bk01.jpg') no-repeat;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);}

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

<ul id="list2" class="nav" list="effect:['lace','lamp'],speed:600,fx:'linear',lace:{opacity:1},lamp:{color:'#000'}">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#" class="checked">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

<ul id="list3" class="nav" list="effect:['lace','lamp'],speed:600,fx:'linear',lace:{opacity:1}">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>

</section>

<section><h4>例二：竖导航栏</h4>

<ol id="list4" class="nav" list="vertical:1,fx:'linear',speed:600,effect:['lace','lamp'],lace:{opacity:1},lamp:{color:'#333'}">
<li><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#" href="#" class="checked">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ol>

</section>

<?php include 'leko.foot.inc'; ?>