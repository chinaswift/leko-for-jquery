<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<style>

input.text,textarea{
	border:1px solid #9CCD4A;color:#F80;background:url("input-01.png") #fff no-repeat -5px -5px;line-height:1.5;
	border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-webkit-appearance:textField;padding-left:6px;resize:none;
}
#input-text-hover{border-color:#bbb;background-position:0px 0px;color:#333;}

</style>

<?php include 'leko.body.php'; ?>

<br><br><input class="text monospaced-font" id="input-text" size="50" value="http://blog.sina.com.cn/rainersu" />

<br><br><textarea class="monospaced-font" cols="60" rows="6">http://blog.sina.com.cn/rainersu</textarea>

<script>(function($,_,$$){$(function(){

	$("#input-text,textarea").animate("#input-text-hover",3000);
	
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

