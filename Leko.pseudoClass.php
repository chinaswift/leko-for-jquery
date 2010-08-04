<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

code:hover,
form input.txt:hover,
a:hover,
a.test:hover{color:red;}

code#test:hover{color:blue;}

input.txt:focus{background:yellow;}

</style>

<script>

$(function(){_.pseudoClass();});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一：请在IE6下尝试将鼠标移到下面的各个元素之上，在IE7下尝试将输入焦点定位到下面的文本框中</h4>

<br /><br /><code>测试</code>

<code id="test" class="xxx">测试</code>

<br /><br /><form><input class="txt" value="测试" /></form>

</section>

<?php include 'leko.foot.inc'; ?>