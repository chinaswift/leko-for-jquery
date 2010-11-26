<?php include 'leko.head.php'; ?>
<?php include 'leko.head.demo.php'; ?>

<script src="leko.nav.js"></script>

<style>

.nav-h{border:1px solid #d2d3ce;padding:10px;height:35px;}
.nav-h a{height:15px;padding:10px 20px;color:#7b7b71;*float:left;}
.nav-h a:hover,.nav-h li.selected a{color:#000;}
.nav-h li{height:35px;}
.nav-h li.leko{display:block;left:10px;top:10px;height:32px;border-bottom:4px solid #fff;}

.nav-v{width:260px;border:1px solid #d2d3ce;padding:10px;}
.nav-v a{height:15px;padding:10px 20px;color:#7b7b71;}
.nav-v a:hover,.nav-v li.selected a{color:#000;}
.nav-v li{height:35px;}
.nav-v li.leko{display:block;left:10px;top:10px;width:260px;background:#fff;}

</style>

<?php include 'leko.body.php'; ?>

<br><br>

<ul class="nav-h nav" id="nav-1" data-leko-nav="fx:'leko',leko:{exp:'a>div',css:{borderBottomColor:'#B1AFA4',color:'#B1AFA4'}},autoStart:1,event:1">
<li class="leko alone">&nbsp;</li>
<li><a href="#"><div>新闻</div></a></li>
<li data-leko-li="leko:{css:{borderBottomColor:'#EC108D',color:'#EC108D'}}"><a href="#"><div>每周星座运程</div></a></li>
<li data-leko-li="leko:{css:{borderBottomColor:'#F8A530',color:'#F8A530'}}" class="selected"><a href="#"><div>股票行情</div></a></li>
<li data-leko-li="leko:{css:{borderBottomColor:'#9CCD4A',color:'#9CCD4A'}}"><a href="#"><div>讨论版</div></a></li>
<li data-leko-li="leko:{css:{borderBottomColor:'#FF8800',color:'#FF8800'}}"><a href="#"><div>下载</div></a></li>
<li data-leko-li="leko:{css:{borderBottomColor:'#10B4EC',color:'#10B4EC'}}"><a href="#"><div>联系我们</div></a></li>
</ul>

<br>

<ol class="nav-v nav" id="nav-2" data-leko-nav="fx:'leko',leko:{css:{backgroundColor:'#B1AFA4'}},autoStart:1">
<li class="leko alone">&nbsp;</li>
<li><a href="#">新闻</a></li>
<li data-leko-li="leko:{css:{backgroundColor:'#EC108D'}}"><a href="#">每周星座运程</a></li>
<li data-leko-li="leko:{css:{backgroundColor:'#F8A530'}}" class="selected"><a href="#">股票行情</a></li>
<li data-leko-li="leko:{css:{backgroundColor:'#9CCD4A'}}"><a href="#">讨论版</a></li>
<li data-leko-li="leko:{css:{backgroundColor:'#FF8800'}}"><a href="#">下载</a></li>
<li data-leko-li="leko:{css:{backgroundColor:'#10B4EC'}}"><a href="#">联系我们</a></li>
</ol>

<br>

<label for="sel-easing">缓动函数：</label><select id="sel-easing" size="6">
<option>swing</option>
<option>inquad</option>
<option>outquad</option>
<option>inoutquad</option>
<option>incubic</option>
<option>outcubic</option>
<option>inoutcubic</option>
<option>inquart</option>
<option>outquart</option>
<option>inoutquart</option>
<option>inquint</option>
<option>outquint</option>
<option>inoutquint</option>
<option>insine</option>
<option>outsine</option>
<option>inoutsine</option>
<option>inexpo</option>
<option>outexpo</option>
<option>inoutexpo</option>
<option>incirc</option>
<option>outcirc</option>
<option>inoutcirc</option>
<option>inelastic</option>
<option>outelastic</option>
<option>inoutelastic</option>
<option>inback</option>
<option selected>outback</option>
<option>inoutback</option>
<option>inbounce</option>
<option>outbounce</option>
<option>inoutbounce</option>
</select>

<label for="sel-speed">效果速度：</label><select id="sel-speed" size="6">
<option>500</option>
<option selected>1000</option>
<option>1500</option>
<option>2000</option>
<option>2500</option>
<option>3000</option></select>

<input type="checkbox" class="checkbox" id="chk-inanimate"><label for="chk-inanimate">禁用动画</label>

<input type="checkbox" class="checkbox" id="chk-slideshow"><label for="chk-slideshow">禁用幻灯</label>

<script>(function($,_,$$){$(function(){
	
	$(".nav").nav();
	
	$("#sel-easing").change(function(){
		var
			x=$("option:selected",this).text();
		$(".nav").each(function(i,e){
			$$(e,"nav").leko.easing=x;
		});	
	}).change();
	
	$("#sel-speed").change(function(){
		var
			x=parseInt($("option:selected",this).text());
		$(".nav").each(function(i,e){
			$$(e,"nav").leko.speed=x;
		});	
	}).change();
	
	$("#chk-inanimate").change(function(){
		var
			x=this.checked;
		$(".nav").each(function(i,e){
			$$(e,"nav").leko.inanimate=x;
		});	
	}).change();

	$("#chk-slideshow").change(function(){
		var
			x=this.checked;
		$(".nav").each(function(i,e){
			$$(e,"nav").slideshow(!x);
		});	
	}).change();
						
});})(jQuery,Leko,lekoPlugin);</script>

<?php include 'leko.foot.php'; ?>

