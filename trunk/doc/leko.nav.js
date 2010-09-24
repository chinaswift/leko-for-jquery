/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su(rainersu@gmail.com)
 */

(function(_,$){_.fn("nav",function(o,v,d,n){var
a="li",l=a+":not(.deco)",h=!!v.hover-1,e="mouseleave",m="mouseenter "+e+" click",q="selected",k="."+q,s=["hovered",q],c=[/er$/,/ck$/],g="effects",f=v[g],x=$.noop,w=function(t){t=$.isNumber(t)?$(a+":eq("+t+")",o):$(t);if(t.length&&!t.is(k)){$(k,o).removeClass(q);t.addClass(q);return 1;}};if(f){f=$.map($.makeArray(f),function(f){return $[g](n,f);});x=function(){$(l,o).each(function(i,e){e=$(e);var
z=[o,e,e.currents(a,$.extend(true,{},v,e.defaults(a))),d];for(i in s)z.push(e.hasClass(s[i]));$.each(f,function(k,f){f.apply(o,z);});});}}
o.undelegate(l,m,d[m]).delegate(l,m,d[m]=function(e){var
i,b,t=$(this);for(i in c){b=c[i].test(e.type);if(i<1)t.toggleClass(s[i],b);if(b&&(i==1||i==h)&&!w(t))return;}
x();}).unbind(e,d[e]).bind(e,d[e]=function(){var
n=s[0];e=$(k,o).addClass(n);x();e.removeClass(n);});w(v[q]);o[e]();},{speed:700,fx:"outback"},{lava:function(o,e,v,d,h,s){if(h){var
a="position",p=e.css(a,function(i,v){return v=="static"?"relative":v;})[a]();(d.b=d.b||$("<li />").addClass("deco").append("<a href='#'>&nbsp;</a>").css({float:"none",position:"absolute"}).height(e.height()).prependTo(o).moveTo(NaN,p.top)).stop().animate($.extend({left:p.left,width:$("a",e).width()},v.lava),v.speed,v.fx);}}});})(Leko,jQuery);