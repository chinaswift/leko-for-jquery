<?php

include 'leko.head.inc';
include 'leko.neck.inc';
include 'cssmin.php';
include 'jsmin.php';

define('DOC_PATH'  ,'doc/');
define('HHC_PATH'  ,'E:\Develop\Server\HtmlHelp\hhc');
define('LIB_VER'   ,'1.0');
define('LIB_NAME'  ,'Leko');
define('HOMESITE'  ,'http://www.lekolite.cn/');
define('DOC_BOOK'  ,LIB_NAME.'-'.LIB_VER);
define('BOOK_TITLE',LIB_NAME.' '.LIB_VER.' - The Best User Interface Library for jQuery');
define('COPYRIGHT','/*!'."\n".
' * Leko for jQuery v'.LIB_VER."\n".
' * '.HOMESITE."\n".
' *'."\n".
' * 苏昱(苏小雨)作品'."\n".
' * Copyright 2010, Rainer Su'."\n".
' * Dual licensed under the MIT or GPL Version 2 licenses.'."\n".
' */'."\n");

echo '<br /><hr />开始发布内核：<br /><br /><pre>';
if($dir=opendir(DOC_PATH)){
	while($file=readdir($dir)){
		if(is_file(DOC_PATH.$file))unlink(DOC_PATH.$file);
	};
	closedir();
}

if($dir=opendir('.')){
	while($file=readdir($dir)){
		if(is_file($file)){
			$info=pathinfo($file);
			$ext=$info['extension'];
			if($ext=='js'){
				file_put_contents(DOC_PATH.$file, COPYRIGHT.(jsmin::minify(file_get_contents($file))));
				echo DOC_PATH.$file.'(<mark>'.sprintf("%01.2f",filesize(DOC_PATH.$file)/1024).'KB</mark>/'.sprintf("%01.2f",filesize($file)/1024).'KB'.')<br />';
			}
			else if($ext=='css'){
				file_put_contents(DOC_PATH.$file,COPYRIGHT.(cssmin::minify(file_get_contents($file))));
				echo DOC_PATH.$file.'(<mark>'.sprintf("%01.2f",filesize(DOC_PATH.$file)/1024).'KB</mark>/'.sprintf("%01.2f",filesize($file)/1024).'KB'.')<br />';
			}
			else if(in_array($ext,array('ico','jpg','png','gif')))echo DOC_PATH.$file.(copy($file,DOC_PATH.$file)?'':' - Shit Error').'<br />';
		}
	};
	closedir();
}

echo '</pre><br /><hr />开始创建文档：<br /><br /><pre>';
$doc=new DOMDocument('1.0','utf-8');
$doc->load('leko.xml',LIBXML_NOBLANKS);
$xsl=new DOMXPath($doc);

$hhc='<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<HTML><HEAD><meta name="GENERATOR" content="Microsoft&reg; HTML Help Workshop 4.74"></HEAD><BODY>
<OBJECT type="text/site properties"><param name="Window Styles" value="0x800025"><param name="Font" value="Lucida Console,9,1"></OBJECT>'."\n";
$tags=array('object'=>'对象','method'=>'方法','property'=>'字段');
function run($i,$n){
	global $hhc,$tags,$xsl,$doc;
	$hhc.='<ul>';
	foreach($i->childNodes as $node){
		$tag=$node->nodeName;
		if($node->nodeType==1&&array_key_exists($tag,$tags)){
			$name=$node->getAttribute('name');
			$full=$n.$name;
			$html='<h2 class="en">'.$full.'</h2>'.'<hr />'.$xsl->query('brief',$node)->item(0)->nodeValue;
			if($tag=='object'){
				$rowi=0;
				if($node->hasChildNodes())foreach($tags as $tag=>$txt){
					$rowi++;
					$childs=$xsl->query($tag,$node);
					if($childs->length){
						$html.='<br /><br /><br /><h4><b>'.$txt.'</b></h4><table border="0" cellspacing="0" cellpadding="0"><thead><tr class="row'.$rowi.'"><th class="col1">'.$txt.'名称</th>'.($rowi==3?'<th class="col2">数据类型</th><th class="col2">是否只读</th>':'').'<th>简明介绍</th></tr></thead><tbody>';
						foreach($childs as $x=>$child){
							$cn=$child->getAttribute('name');
							$cb=$xsl->query('brief',$child);
							$html.='<tr'.($x%2?' class="odd"':'').'><td class="en"><a href="'.$full.'.'.$cn.'.html">'.$cn.'</a></td>';
							if($rowi==3){
								$html.='<td class="en">';
								$pt=$xsl->query('vartype',$child);
								foreach($pt as $p=>$t)$html.=($p?'|':'').$t->getAttribute('name');
								$html.='</td><td class="en">'.($child->hasAttribute('readonly')?'√':'').'</td>';
							}
							
								
							$html.='<td>'.($cb->length?$cb->item(0)->nodeValue:'').'</td></tr>';	
						}
						$html.='</tbody></table>';
					}
				}
			}
			else if($tag=='property'){
				$returns=$xsl->query('vartype',$node);
				$rh='';
				if($returns->length){
					foreach($returns as $x=>$return){
						$css=$x%2?' class="odd"':'';
						$ren=$return->getAttribute('name');
						$vals=$xsl->query('varvalue',$return);
						$valn=$vals->length;
						$vh='';
						foreach($vals as $y=>$val){
							$val_v=$xsl->query('value',$val);
							$val_b=$xsl->query('brief',$val);
							$vh.=($y?'<tr'.$css.'>':'').'<td class="en">'.($val_v->length?$val_v->item(0)->nodeValue:'').'</td><td>'.($val_b->length?$val_b->item(0)->nodeValue:'').'</td></tr>';
						}
						$rh.='<tr'.$css.'><td rowspan="'.($valn?$valn:1).'" class="en">'.$ren.'</td>'.$vh;
					}
					$rh='<section><h4><b>说明</b></h4><table border="0" cellspacing="0" cellpadding="0"><thead><tr class="row2"><th class="col2">数据类型</th><th class="col2">可能的取值</th><th>说明</th></tr></thead><tbody>'.$rh.'</tbody></table></section>';
				}
				$html.=$rh;
			}
			else if($tag=='method'){
				$fn=preg_match("/\.fn\.$/",$n);
				$params =$xsl->query('param' ,$node);
				$returns=$xsl->query('return',$node);
				$html.='<section><h4><b>语法</b></h4><code>';
				$rh='';
				if($returns->length){
					foreach($returns as $x=>$return){
						$css=$x%2?' class="odd"':'';
						$ren=$return->getAttribute('name');
						$html.=($x?'|':'').'<i>'.$ren.'</i>';
						$vals=$xsl->query('varvalue',$return);
						$valn=$vals->length;
						$vh='';
						foreach($vals as $y=>$val){
							$val_v=$xsl->query('value',$val);
							$val_b=$xsl->query('brief',$val);
							$vh.=($y?'<tr'.$css.'>':'').'<td class="en">'.($val_v->length?$val_v->item(0)->nodeValue:'').'</td><td>'.($val_b->length?$val_b->item(0)->nodeValue:'').'</td></tr>';
						}
						$rh.='<tr'.$css.'><td rowspan="'.($valn?$valn:1).'" class="en">'.$ren.'</td>'.$vh;
					}
					$rh='<section><h4><b>返回</b></h4><table border="0" cellspacing="0" cellpadding="0"><thead><tr class="row2"><th class="col2">数据类型</th><th class="col2">可能的取值</th><th>说明</th></tr></thead><tbody>'.$rh.'</tbody></table></section>';
					$html.=' = ';
				}
				$html.='<strong>'.$full.'</strong>(';
				$hh='';
				if($params ->length){

					if($fn)$html.='{';

					foreach($params  as $x=>$param ){
						$css=$x%2?' class="odd"':'';
						$van=$param->getAttribute('name');
						$opt=$param->hasAttribute('optional');
						$html.=($x?' , ':'').($opt?'[':'').'<i>'.$van.'</i>'.($opt?']':'');						
						$vars=$xsl->query('vartype',$param);
						$vdef=$xsl->query('default',$param);
						$varn=$vars->length;	
						$ph='';
						$pi=0;						
						foreach($vars as $y=>$var){
							$vals=$xsl->query('varvalue' ,$var);
							$valn=$vals->length;
							$vh='';
							$pi+=$valn;						
							foreach($vals as $z=>$val){
								$val_v=$xsl->query('value',$val);
								$val_b=$xsl->query('brief',$val);
								$vh.=($z?'<tr'.$css.'>':'').'<td class="en">'.($val_v->length?$val_v->item(0)->nodeValue:'').'</td><td>'.($val_b->length?$val_b->item(0)->nodeValue:'').'</td></tr>';
							}
							$ph.=($y?'<tr'.$css.'>':'').'<td rowspan="'.($valn?$valn:1).'" class="en">'.$var->getAttribute('name').'</td>'.$vh;
						}
						if(!$pi)$pi=1;
						$hh.='<tr'.$css.'><td rowspan="'.$pi.'" class="en">'.$van.'</td><td class="en" rowspan="'.$pi.'">'.($opt?'√':'').'</td><td class="en" rowspan="'.$pi.'">'.($vdef->length?$vdef->item(0)->nodeValue:'').'</td>'.$ph;
					}

					if($fn)$html.='}';

					$hh='<section><h4><b>参数</b></h4><table border="0" cellspacing="0" cellpadding="0"><thead><tr class="row1"><th class="col2">参数名</th><th class="col2">是否可选</th><th class="col2">缺省值</th><th class="col2">数据类型</th><th class="col2">可能的取值</th><th>说明</th></tr></thead><tbody>'.$hh.'</tbody></table></section>';
				}
				$html.=')</code></section>'.$hh.$rh;
			}
			$codes=$xsl->query('code',$node);
			if($codes->length){
				$html.='<script>$(function(){$("button").click(function(){eval($(this).prev().prev().text());});});</script><section><h4><b>示例</b></h4>';
				foreach($codes as $x=>$code){
					if($x)$html.='<br />';
					$html.='<pre>'.$code->nodeValue.'</pre>';
					if($code->hasAttribute('canrun'))$html.='<br /><button>运行上面的代码</button><br />';
				}
				$html.='</section>';
			}
			$demos=$xsl->query('demo',$node);
			$files=array();
			foreach($demos as $demo){
				$files[]=array('link'=>$demo->getAttribute('link'),'name'=>$demo->getAttribute('name'));
			}
			if(file_exists($full.'.php'))$files[]=array('link'=>$full,'name'=>'测试用例演示');
			if(count($files)){
				$html.='<section><h4><b>实例</b></h4><ol>';
				foreach($files as $x=>$file){
					$src=$file['link'].'.php';
					if(file_exists($src)){
						$tge=$file['link'].'.'.$x.'.html';
						$tgt=DOC_PATH.$tge;
						ob_start();
						include $src;
						$htm=ob_get_contents();
						ob_end_clean();
						file_put_contents($tgt,$htm,FILE_TEXT);
						if(file_exists($tgt)){
							echo '<a href="'.$tgt.'" target="_blank">'.$tgt.'</a><br />';
							$html.='<li><a href="'.$tge.'">'.$file['name'].'</a></li>';
						}
					}
				}
				$html.='</section>';
			}

			$head='';
			$files=$xsl->query('srcfile',$node);
			if($files->length){
				$html.='<section><h4><b>文件</b></h4><ol class="en">';
				foreach($files as $file){
					$href=$file->nodeValue;
					$init=$file->hasAttribute('within');
					$html.='<li'.($init?' class="within"':'').'><a href="'.$href.'">'.$href.'</a>'.' ('.sprintf("%01.2f",filesize($href)/1024).'KB)</li>';
					if(!preg_match("/\b(leko|jquery)\.js/",$href))$head.='<script src="'.$href.'"></script>';
				}
				$html.='</ol></section>';
			}
			doc($full,$html,$head);
			$hhc.='<LI><OBJECT type="text/sitemap"><param name="Name" value="'.$name.'"><param name="Local" value="'.$full.'.html"></OBJECT>'."\n";
			if($node->hasChildNodes())run($node,$full.'.');
		}
	}
	$hhc.='</ul>';
}
run($doc->documentElement,'');

$hhp='[OPTIONS]
Binary TOC=Yes
Compatibility=1.1 or later
Compiled file='.DOC_BOOK.'.chm
Contents file='.DOC_BOOK.'.hhc
Default Font=微软雅黑,9,134
Default Window=Handbook
Default topic=index.html
Display compile progress=Yes
Error log file='.DOC_BOOK.'.log
Full-text search=Yes
Language=0x804 中文(简体，中国)
Title='.BOOK_TITLE."\n\n".'[WINDOWS]
Handbook="'.BOOK_TITLE.'","'.DOC_BOOK.'.hhc",,"index.html","'.HOMESITE.'",,"网站",,,0x63520,,0x387e,[0,0,800,600],,,,,,,0'."\n\n".'[FILES]';
if($dir=opendir(DOC_PATH)){
	while($file=readdir($dir)){
		if(is_file(DOC_PATH.$file))$hhp.="\n".$file;
	};
	closedir();
}
$hhp.="\n\n".'[INFOTYPES]';
file_put_contents(DOC_PATH.DOC_BOOK.'.hhp',iconv("UTF-8","GB2312",$hhp),FILE_TEXT);
echo DOC_PATH.DOC_BOOK.'.hhp<br />';

$hhc.='</BODY></HTML>';
file_put_contents(DOC_PATH.DOC_BOOK.'.hhc',iconv("UTF-8","GB2312",$hhc),FILE_TEXT);
echo DOC_PATH.DOC_BOOK.'.hhc<br />';

echo '</pre><br /><hr />开始编译文档：<br /><br /><pre>';
$echo=array();
$cmd=HHC_PATH.' '.realpath(DOC_PATH).'\\'.DOC_BOOK.'.hhp';
exec($cmd,$echo);
foreach($echo as $line)echo $line.'<br />';

echo '</pre>';

function doc($name,$html,$head=''){
	$file=DOC_PATH.$name.'.html';
	ob_start();
	include 'leko.head.inc';
	echo $head;
	include 'leko.neck.inc';
	echo $html;
	include 'leko.foot.inc';
	$html=ob_get_contents();
	ob_end_clean();
	file_put_contents($file,$html,FILE_TEXT);
	if(file_exists($file))echo '<a href="'.$file.'" target="_blank">'.$file.'</a><br />';
}

include 'leko.foot.inc';

?>