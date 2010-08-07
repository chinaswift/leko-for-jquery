/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(_,$){$.fn.bubble=(function(){var
i=0;return function(){return i++;}})();$.fn.extend({resetShadow:function(){return this.each(function(){var
o=$(this),d=o.data("shadow");});}});_.fn("popup",function(o,v,d,c){var
b=v.enabled,f=$(v.target),s=Math.round,a=v.shadow,w,h,m,n,x,y,p;if(f.length&&f.visible()){m=o.css({position:"absolute"}).transparent(1).insertAfter(f).outerWidth();n=o.outerHeight();w=f.outerWidth();h=f.outerHeight();p=f.position();o.css({left:p.left+[-m,0,s(w/2-m),s((w-m)/2),s(w/2),w-m,w][v.posX||0]+(v.offsetX||0)+"px",top:p.top+[-n,0,s(h/2-n),s((h-n)/2),s(h/2),h-n,h][v.posY||0]+(v.offsetY||0)+"px"});if(a)o.shadow(a);o.transparent();o.data("shadow")._();}},{shadow:{}},"shadow",function(o,v,d,c){var
n=!!v.enabled,a=v.opacity,b=$.support.shadow,x=v.x,y=v.y,r=v.blur,e=d.$,s=_.msie(),c="position",u="absolute",p,g,q;if(b)o.css(b,n?x+"px "+y+"px "+r+"px "+_.color([0,0,0,a]):"none");else{if(!e){q=o.css(c)!=u;o.add(o.parent()).css(c,function(i,v){return q&&v=="static"?"relative":v;});d.$=e=$("<div />").css({position:u,float:"none",border:0,margin:0,padding:0}).hide();}
delete d._;d._=function(){g=n&&o.visible();if(g){p=o[c]();e.height(o.outerHeight()).width(o.outerWidth()).css({top:p.top+y-r+(y>0?-1:y<0?1:0)+"px",left:p.left+x-r+(x>0?-1:x<0?1:0)+"px",zIndex:o.css("zIndex")}).insertBefore(o);}
e[g?"transparent":"hide"]();}
e.css({opacity:a,background:"#000",filter:s?"progid:DXImageTransform.Microsoft.blur(pixelradius="+r+",makeshadow='true',ShadowOpacity="+a+")":""});d._();}},{x:2,y:2,blur:3,opacity:0.3});})(Leko,jQuery);