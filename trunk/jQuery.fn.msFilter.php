<?php include 'leko.head.inc'; ?>
<?php include 'leko.demo.head.inc'; ?>

<style>

.box{background:#efefef;width:800px;height:200px;padding:25px;}
#box{
	width:300px;height:80px;background:#00B8EE;border:10px solid #9CCD4A;padding:10px;
	/*filter:
		progid:DXImageTransform.Microsoft.BasicImage(Rotation=0,Mirror=0,Invert=1,XRay=0,Grayscale=0,Opacity=1.00), 
		progid:DXImageTransform.Microsoft.Alpha(style=1,opacity=25,finishOpacity=100,startX=0,finishX=100,startY=100,finishY=0) ,
		progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#ff00ff,endColorStr=#00ff99);
	*/
}
#code{width:400px;}
textarea{height:200px;vertical-align:top;margin:0;border:0;padding:0;margin-left:25px;font-size:11px;}
#td1{width:80px;}

</style>

<script>

$(function(){

	//console.log($("div").msFilter());	

	$("button").text(_.msie()?"创建滤镜效果":"当前浏览器不支持滤镜效果").attr("disabled",!_.msie()).click(function(){
		$("#box").msFilter({
			Alpha:{
				style:1,
				opacity:25,
				finishOpacity:100,
				startX:0,
				finishX:100,
				startY:100,
				finishY:0
			},
			BasicImage:{
				Invert:1,
				Opacity:1.00
			},
			Gradient:{
				gradientType:0,
				startColorStr:'#ff00ff',
				endColorStr:'#00ff99'
			}			
		});
	});

});

</script>

<?php include 'leko.neck.inc'; ?>
<?php include 'leko.demo.neck.inc'; ?>

<section><h4>例一</h4><div class="box" class="tr">

<div id="box" class="tr td">

<div class="td" id="td1"><img src="apple-touch-icon.png" width="57" height="57" /></div>

<div class="td" id="td2"><h3>&nbsp;囧鸟</h3>这里有一些文本。</div>

</div>

<div id="code" class="td"><textarea class="en">
$("#box").msFilter({
    Alpha:{
	    style:1,
	    opacity:25,
	    finishOpacity:100,
	    startX:0,
	    finishX:100,
	    startY:100,
	    finishY:0
    },
    BasicImage:{
	    Invert:1,
	    Opacity:1.00
    },
    Gradient:{
	    gradientType:0,
	    startColorStr:'#ff00ff',
	    endColorStr:'#00ff99'
    }			
});
</textarea></div>

</div></section>

<section><button>Fix All !</button></section>

<?php include 'leko.foot.inc'; ?>