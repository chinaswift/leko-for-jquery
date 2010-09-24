<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

ul.nav{margin:10px 0;}
ul.nav a:hover,ul.nav a:active,ul.nav a:focus{text-decoration:none;}

#list0{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list0 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list0 li.hovered  a{color:#F8A530;}
#list0 li.focused  a{color:#F8A530;}
#list0 li.selected a{color:#EC108D;}

#list1{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list1 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 30px 5px 0;color:#333;}
#list1 li.deco     {border-bottom:5px solid #000;}

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
<li class="selected"><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>
<ul id="list1" class="nav" nav="selected:0,effects:'lava',speed:1000,css:{color:'#999999'},lava:{borderBottomColor:'#999999'}">
<li><a href="#">新闻</a></li>
<li li="css:{color:'#00B8EE'},lava:{borderBottomColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="css:{color:'#EC108D'},lava:{borderBottomColor:'#EC108D'}" class="selected"><a href="#">欧洲进口洁具</a></li>
<li li="css:{color:'#F8A530'},lava:{borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li li="css:{color:'#9CCD4A'},lava:{borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li li="css:{color:'#00B8EE'},lava:{borderBottomColor:'#FF8800'}"><a href="#">奢侈品</a></li>
</ul>
</section>

<?php include 'leko.foot.inc'; ?>