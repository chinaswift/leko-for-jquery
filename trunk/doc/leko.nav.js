/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su(rainersu@gmail.com)
 */

(function(_,$){_.fn("nav",function(o,v,d,n){var
a="li",t=v[a],x="labelled",y="selected",m="mouseleave",z=z+" mouseenter",f=$.effects(n,v.effect)(o,v,d,n),h=function(e){e=e?$(e):$(t,o).filter("."+y);if(e[0])f[x](e,e.defaults(a));},s=function(i){var
c=$(t,o).not("."+x),l=v.onselect,m=-1;if(i!==void 0)i=($.isNumber(i)?c.eq(i):$(i))[0];if(i)c.each(function(n,e){$(e).toggleClass(y,e==i);if(e==i)m=n;});h(i);f[y](i);if(l)l.call(o,i,m);};o.unbind(m,d.m).bind(m,d.m=function(e){h();});$("li",o).die(z,d.z).live(z,d.z=function(e){if(!$(this).is("."+x)&&/r$/.test(e.type)){h(this);}});h();},{effect:"lavalamp",fx:"outback",speed:700,li:"li",selected:20},{lavalamp:function(o,v,d,n){return{labelled:function(e,a){var
p=e.position();(d.b=d.b||$("<"+v.li+"/>").addClass("labelled").append("<a href='#'>&nbsp;</a>").css({float:"none",position:"absolute"}).height(e.height()).prependTo(o).moveTo(NaN,p.top)).stop().animate($.extend({left:p.left,width:$(":first-child",e).width()},v.css,a.css),v.speed,v.fx);},selected:$.noop};}});})(Leko,jQuery);