/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function($){$.fn.boxShadow=function(xOffset,yOffset,blurRadius,shadowColor){if(!$.browser.msie)return;return this.each(function(){$(this).css({position:"relative",zoom:1,zIndex:"2"});$(this).parent().css({position:"relative"});var div=document.createElement("div");$(this).parent().append(div);var _top,_left,_width,_height;if(blurRadius!=0){$(div).css("filter","progid:DXImageTransform.Microsoft.Blur(pixelRadius="+(blurRadius)+", enabled='true')");_top=yOffset-blurRadius-1;_left=xOffset-blurRadius-1;_width=$(this).outerWidth()+1;_height=$(this).outerHeight()+1;}else{_top=yOffset;_left=xOffset;_width=$(this).outerWidth();_height=$(this).outerHeight();}
$(div).css({top:_top,left:_left,width:_width,height:_height,background:shadowColor,position:"absolute",zIndex:1});});};})(jQuery);