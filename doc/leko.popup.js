/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(_,$){var
$b=$.support.shadow,$c="position",$u="absolute";_.fn("popup",function(o,v,d,c){var
b=v.enabled,f=$(v.target),s=Math.round,a=v.shadow,w,h,m,n,p;if(f.length&&f.visible().d){m=o.css($c,$u).transparent(1).show().insertAfter(f).outerWidth();n=o.outerHeight();w=f.outerWidth();h=f.outerHeight();p=f[$c]();o.css({left:p.left+[-m,0,s((w-m)/2),w-m,w][v.posX||0]+(v.offsetX||0)+"px",top:p.top+[-n,0,s((h-n)/2),h-n,h][v.posY||0]+(v.offsetY||0)+"px"});o.transparent();if(a)o.shadow(a);}},{shadow:{}},"shadow",function(o,v,d,c){var
n=!!v.enabled,a=v.opacity,x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie(),b=o.visible(),q;if($b)o.css($b,n?x+"px "+y+"px "+r+"px "+_.color([0,0,0,a]):"none");else{if(!e){q=o.css($c)!=$u;o.add(o.parent()).css($c,function(i,v){return q&&v=="static"?"relative":v;});e=d.$=$("<div />").css($c,$u).css({float:"none",border:0,margin:0,padding:0}).hide();}
o.transparent();q=o[$c]();e.height(o.outerHeight()).width(o.outerWidth()).css({top:q.top+y-r+(y>0?-1:y<0?1:0)+"px",left:q.left+x-r+(x>0?-1:x<0?1:0)+"px",zIndex:o.css("zIndex"),opacity:a,background:"#000",filter:s?"progid:DXImageTransform.Microsoft.blur(pixelradius="+r+",makeshadow='true',ShadowOpacity="+a+")":""}).transparent(!b.v).toggle(b.d&&n).insertBefore(o);}},{x:2,y:2,blur:3,opacity:0.3});})(Leko,jQuery);