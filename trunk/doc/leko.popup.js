/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(_,$){$.fn.bubble=(function(){var
i=0;return function(){return i++;}})();_.fn("shadow",function(o,v,d,c){var
n=v.enabled,a=v.opacity,b=$.support.shadow,x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie(),c="position",u="absolute",p,q;if(b)o.css(b,n?x+"px "+y+"px "+r+"px "+_.color([0,0,0,a]):"none");else{if(!e){q=o.css(c)!=u;o.add(o.parent()).css(c,function(i,v){return q&&v=="static"?"relative":v;});d.$=e=$("<div />").css({position:u,float:"none",border:0,margin:0,padding:0}).insertBefore(o);}
p=o[c]();e.height(o.outerHeight()).width(o.outerWidth()).css({zIndex:o.css("zIndex"),top:p.top+y-r+(y>0?-1:y<0?1:0)+"px",left:p.left+x-r+(x>0?-1:x<0?1:0)+"px",background:"#000",opacity:a,filter:s?"progid:DXImageTransform.Microsoft.blur(pixelradius="+r+",makeshadow='true',ShadowOpacity="+a+")":""}).toggle(n);}},{x:2,y:2,blur:3,enabled:1,opacity:0.3});})(Leko,jQuery);