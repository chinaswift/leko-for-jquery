<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

ul.nav{margin:10px 0;}
ul.nav a:hover,ul.nav a:active,ul.nav a:focus{text-decoration:none;}

#list0{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list0 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0 5px 0;margin-right:30px;color:#333;}
#list0 li a:hover{color:#F8A530;}
#list0 li.selected a{color:#EC108D;}

#list1{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list1 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0 5px 0;margin-right:30px;color:#333;}
#list1 li.selected a{color:#EC108D;}

#list2{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list2 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0 5px 0;margin-right:30px;color:#333;}
#list2 li.labelled{border-bottom:5px solid #000;}

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
<li class="selected"><a href="#">新闻</a></li>
<li><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>
<ul id="list1" class="nav" nav="hover:1">
<li><a href="#">新闻</a></li>
<li class="selected"><a href="#">房地产</a></li>
<li><a href="#">欧洲进口洁具</a></li>
<li><a href="#">美食</a></li>
<li><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul>
</section>

<hr />

<section><h4>例二：扩展效果</h4><ul id="list2" class="nav" nav="effect:'lavalamp',speed:1000,css:{color:'#999999'},labelcss:{borderBottomColor:'#999999'}">
<li><a href="#">新闻</a></li>
<li li="css:{color:'#00B8EE'},labelcss:{borderBottomColor:'#00B8EE'}"><a href="#">房地产</a></li>
<li li="css:{color:'#EC108D'},labelcss:{borderBottomColor:'#EC108D'}" class="selected"><a href="#">欧洲进口洁具</a></li>
<li li="css:{color:'#F8A530'},labelcss:{borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li li="css:{color:'#9CCD4A'},labelcss:{borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul></section>

<?php include 'leko.foot.inc'; ?>