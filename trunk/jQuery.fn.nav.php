<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

#list1{border:1px solid #dfdfdf;padding:15px 0 15px 30px;width:550px;}
#list1 li{/*background:yellow;*/}
#list1 li a{font-size:14px;font-weight:bold;letter-spacing:1px;padding:5px 0 5px 0;margin-right:30px;color:#333;}
#list1 li a:hover,#list1 li a:active,#list1 li a:focus{text-decoration:none;}
#list1 li.labelled{/*background:red;*/border-bottom:5px solid #000;}
</style>

<script src="leko.nav.js"></script>

<script>

$(function(){

	$("#list1").nav();

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请选择参数并实时查看效果变化</h4><ul id="list1" class="nav" nav="css:{borderBottomColor:'#999999'}">
<li class="selected"><a href="#">新闻</a></li>
<li li="css:{borderBottomColor:'#EC108D'}"><a href="#">房地产</a></li>
<li li="css:{borderBottomColor:'#00B8EE'}"><a href="#">欧洲进口洁具</a></li>
<li li="css:{borderBottomColor:'#F8A530'}"><a href="#">美食</a></li>
<li li="css:{borderBottomColor:'#9CCD4A'}"><a href="#">妇幼保健</a></li>
<li><a href="#">奢侈品</a></li>
</ul></section>

<?php include 'leko.foot.inc'; ?>