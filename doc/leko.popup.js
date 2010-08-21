/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 */

(function(_,$){var
B=$.support.shadow;$.fn.extend({andShadow:function(b){var
o=this,d=o.leko("shadow");if(b&&d._)d._();return $(d.$).add(o);},over:function(o,b,s){var
f=this,d="zIndex";o=$(o).eq(0).css("position",function(i,v){return v=="static"?"relative":v;});return o.length?f["insert"+(b?"Before":"After")](b&&!s?o.andShadow():o).css(d,o.css(d)):f;}});_.fn("menu",function(o,v,d,c){},{shadow:{}},"shadow",function(o,v,d,c){var
g=_.rgba(v.color),a=g[3],x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie();g=_.color(g);if(B)o.css(B,x+"px "+y+"px "+r+"px "+g);else{if(!e){e=d.$=$("<div />").css({border:0,margin:0,padding:0,outline:0,float:"none"});}
e.css({opacity:a,background:g,filter:s?"progid:DXImageTransform.Microsoft.alpha(opacity="+a*100+") progid:DXImageTransform.Microsoft.blur(pixelradius="+r+")":""});d._=function(){var
b=o.visible(),f=o.css("position"),t=f=="static",l=f=="relative";if(!b.d)o.transparent(1).show();e.css({position:t||l?"absolute":f}).layout(o).locate(o,1,1,x-r+(!r||!x?0:x>0?-1:1),y-r+(!r||!x?0:y>0?-1:1)).over(o,1,1).add(o).transparent(!b.v).toggle(b.d);};d._();}},{x:2,y:2,blur:3,color:[0,0,0,0.3]});})(Leko,jQuery);