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
b=v.enabled,f=$(v.target),s=Math.round,a=v.shadow,k=o.visible(),w,h,m,n,p,q;if(f.length&&f.visible().d){p=f[$c]();if(a)o.shadow(a);$(o.getShadow().$).add(o).css($c,$u).insertAfter(f).transparent(1).show();q=o.position();m=o.outerWidth();n=o.outerHeight();w=f.outerWidth();h=f.outerHeight();o.addShadow().moveBy(p.left+[-m,0,s((w-m)/2),w-m,w][v.posX||0]+(v.offsetX||0)-q.left,p.top+[-n,0,s((h-n)/2),h-n,h][v.posY||0]+(v.offsetY||0)-q.top);o.transparent();}},{shadow:{}},"shadow",function(o,v,d,c){var
a=v.opacity,x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie(),b=o.visible(),q;if($b)o.css($b,x+"px "+y+"px "+r+"px "+_.color([0,0,0,a]));else{if(!e){q=o.css($c)!=$u;o.add(o.parent()).css($c,function(i,v){return q&&v=="static"?"relative":v;});e=d.$=$("<div />").css($c,$u).css({float:"none",border:0,margin:0,padding:0}).hide();}
o.transparent(1).show();q=o[$c]();e.insertBefore(o).resizeTo(o.outerWidth(),o.outerHeight()).moveTo(q.left+x-r+(x>0?-1:x<0?1:0),q.top+y-r+(y>0?-1:y<0?1:0)).css({zIndex:o.css("zIndex"),opacity:a,background:"#000",filter:s?"progid:DXImageTransform.Microsoft.blur(pixelradius="+r+",makeshadow='true',ShadowOpacity="+a+")":""}).add(o).transparent(!b.v).toggle(b.d);}},{x:2,y:2,blur:3,opacity:0.3});})(Leko,jQuery);