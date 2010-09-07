<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

input{width:24px;}
pre{width:250px;}
.frame{width:64px;height:64px;padding:3px;}

.td1{width:300px;}

</style>

<script>

$(function(){
	$("select").change(function(){
		var
			v=$("select option:selected").text(),
			a=_.rgba(v),
			b=$.support.rgba,
			t="rgb";
		$("input").each(function(i,v){
			$(v).val(a[i]);
		});
		if(b)t+="a";else a.pop();
		b=b||!(/^(?:rgba|hsl)/.test(v));
		with($("pre")){
			eq(0).html("Leko.rgba(\""+v+"\");");
			eq(1).html("background-color:"+t+"("+a+");");
		}
		with($(".frame")){
			eq(0).css("background-color",b?v:"#fff").children("h6").html(b?"":"当前浏览器不支持此种CSS3语法");
			eq(1).css("background-color",t+"("+a+")");
		}
	}).change();
});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>请选择颜色：</h4>
<div class="tr"><div class="td en td1"><select class="en">
<option>#FC3</option>
<option>#cc66ff</option>
<option>rgb(127,255,212)</option>
<option>rgba(127,255,212,0.5)</option>
<option>hsl(240,90%,50%)</option>
<option>hsla(240,90%,50%,0.5)</option>
<option>tan</option>
<option>rgb(40% ,50% ,60%)</option>
</select><hr class="space" /><pre>&nbsp;</pre></div>
<div class="td frame"><h6></h6></div></div></section>

<section><h4>转换为数组：</h4>
<div class="tr"><div class="td en td1">R&nbsp;<input class="txt" />&nbsp;G&nbsp;<input class="txt" />&nbsp;B&nbsp;<input class="txt" />&nbsp;A&nbsp;<input class="txt" /><hr class="space" /><pre>&nbsp;</pre></div><div class="td frame"></div></div></section>

<?php include 'leko.foot.inc'; ?>