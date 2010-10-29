<?php include 'leko.head.php'; ?>

<style>

.list-h{width:520px;border:1px solid #d2d3ce;padding:10px;}
.list-h a{padding:10px 20px;color:#7b7b71;}
.list-h li.selected a{color:#ff436f;background:#efefef;}
.list-h a:hover{color:#00b8ee;}

.list-v{width:260px;border:1px solid #d2d3ce;padding:10px;}
.list-v a{padding:10px 20px;color:#7b7b71;}
.list-v li.selected a{color:#ff436f;background:#efefef;}
.list-v a:hover{color:#00b8ee;}

.list-z{width:260px;border:1px solid #d2d3ce;padding:10px;height:20px;}
.list-z li{left:10px;top:10px;background:#efefef;}
.list-z a{padding:10px 20px;color:#7b7b71;}
.list-z li.selected a{color:#ff436f;background:#efefef;}
.list-z a:hover{color:#00b8ee;}

</style>

<script src="leko.list.js"></script>

<?php include 'leko.body.php'; ?>

<br><br>

<ul class="list-h nav" id="nav-1" data-leko-nav="x:3">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li class="selected"><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li><a href="#">联系我们</a></li>
</ul>

<br>

<ol class="list-v nav" id="nav-2" data-leko-nav="x:3">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li class="selected"><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li><a href="#">联系我们</a></li>
</ol>

<br>

<ol class="list-z nav" id="nav-3" data-leko-nav="x:3">
<li><a href="#">新闻</a></li>
<li><a href="#">每周星座运程</a></li>
<li class="selected"><a href="#">股票行情</a></li>
<li><a href="#">讨论版</a></li>
<li><a href="#">下载</a></li>
<li><a href="#">联系我们</a></li>
</ol>

<?php include 'leko.foot.php'; ?>

