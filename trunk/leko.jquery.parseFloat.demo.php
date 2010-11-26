<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<script src="leko.ui.js"></script>

<style>

table{width:500px;}
td{border:1px solid #ddd;padding:5px 10px;}

</style>

<?php include 'leko.body.php'; ?>

<div class="monospaced-font">

<br><br>

<table id="browser-version"></table>

<br><br>

<table id="str-conversions"></table>

</div>

<script>(function($,_,$$){$(function(){

	var
		h="";
	
	$.each($.browser,function(i,v){		
	    h+="<tr><td>"+i+"</td><td>"+(i=="version"?$.parseFloat(v)+"("+v+")":v)+"</td></tr>";
	 });

	$("#browser-version").html(h);
	
	h="";
	
	$.each(["5a..6r",".a0.3.b2.04c","00a13.45b..0c8.de"],function(i,v){		
	    h+="<tr><td>"+v+"</td><td>"+$.parseFloat(v)+"</td></tr>";
	 });

	$("#str-conversions").html(h);	
					
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

