/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(_,$){var
B=$.support.shadow;$.fn.andShadow=function(b){var
o=this,d=o.leko("shadow");if(b&&d._)d._();return $(d.$).add(o);};_.fn("menu",function(o,v,d,c){},{shadow:{}},"shadow",function(o,v,d,c){var
g=_.rgba(v.color),a=g[3],x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie();g=_.color(g);if(B)o.css(B,x+"px "+y+"px "+r+"px "+g);else{if(!e){e=d.$=$("<div />").css({border:0,margin:0,padding:0,outline:0,float:"none"});}
e.css({opacity:a,background:g,filter:s?"progid:DXImageTransform.Microsoft.alpha(opacity="+a*100+") progid:DXImageTransform.Microsoft.blur(pixelradius="+r+")":""});d._=function(){var
b=o.visible(),f=o.css("position"),t=f=="static",l=f=="relative",q=o["position"]();if(!b.d)o.transparent(1).show();if(t)o.css("position","relative");e.css({zIndex:o.css("zIndex"),position:t||l?"absolute":f}).insertBefore(o).layout(o).moveTo(q.left+x-r+(!r||!x?0:x>0?-1:1),q.top+y-r+(!r||!x?0:y>0?-1:1)).add(o).transparent(!b.v).toggle(b.d);};d._();}},{x:2,y:2,blur:3,color:[0,0,0,0.3]});})(Leko,jQuery);