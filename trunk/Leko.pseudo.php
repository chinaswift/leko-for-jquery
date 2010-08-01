<?php include 'leko.head.inc'; ?>

<style>

#demo1 input{
	border:2px solid #00B8EE;width:200px;
}
#demo1 input:focus{
	border-color:#EC108D;background-color:#FEEE69;
}

#demo1 button{
	background:#666;border:0;color:#fff;
}

#demo1 button:hover{
	background:#EC108D;
}

</style>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一</h4><div id="demo1">

<input class="txt" value="测试用的框框" />

<br /><br /><button>测试用的按钮</button>

</div></section>

<?php include 'leko.foot.inc'; ?>