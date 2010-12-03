<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<style>

#input-text-hover{border-color:#FF8800;background-position:-5px -5px;}

</style>

<?php include 'leko.body.php'; ?>

<br><br><input class="text monospaced-font" id="input-text" size="50" value="http://blog.sina.com.cn/rainersu" />

<br><br><textarea class="monospaced-font" cols="60" rows="6">http://blog.sina.com.cn/rainersu</textarea>

<script>(function($,_,$$){$(function(){

	$("#input-text").animate("#input-text-hover",3000);
	
	//$$("#input-text","ui").theme(1,"#input-text-hover");
	
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

