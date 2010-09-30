/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su(rainersu@gmail.com)
 */

(function(_,$){var
D=function(o){return $("<li />").addClass("deco").append("<a href='#'>&nbsp;</a>").css({float:"none",position:"absolute"}).prependTo(o);};_.fn("nav",function(o,v,d,n){var
a="li",l=a+":not(.deco)",h=!!v.hover-1,e="mouseleave",m="mouseenter "+e+" click",q="selected",k="."+q,s=["hovered",q],c=[/er$/,/ck$/],g="fn",f=v[g],x=$.noop,w=function(t){t=$.isNumber(t)?$(a+":eq("+t+")",o):$(t);if(t.length&&!t.is(k)){$(k,o).removeClass(q);t.addClass(q);return 1;}};if(f){f=$.map($.makeArray(f),function(f){return $.effect(n,f);});x=function(){$(l,o).each(function(i,e){e=$(e);var
z=[o,e,e.currents(a,$.extend(true,{},v,e.defaults(a))),d,e.runtimes(a)];for(i in s)z.push(e.hasClass(s[i]));$.each(f,function(k,f){f.apply(o,z);});});}}
o.undelegate(l,m,d[m]).delegate(l,m,d[m]=function(e){var
i,b,t=$(this);for(i in c){b=c[i].test(e.type);if(i<1)t.toggleClass(s[i],b);if(b&&(i==1||i==h)&&!w(t))return;}
x();}).unbind(e,d[e]).bind(e,d[e]=function(){});w(v[q]);o[e]();},{inner:{},speed:1000,fx:"outback"},{lava:function(o,e,v,d,r,h,s){if(h){var
a="position",p=e.css(a,function(i,v){return v=="static"?"relative":v;})[a]();(d.b=d.b||D(o).height(e.height()).moveTo(NaN,p.top)).stop().animate($.extend({left:p.left,width:(v.inner.w?$("a",e):e).width()},v.lava),v.speed,v.fx);}},lamp:function(o,e,v,d,r,h,s){$("a",e).stop().play(h?v.lamp:null,v.speed,v.fx);},lade:function(o,e,v,d,r,h,s){e.css("position",function(i,v){return v=="static"?"relative":v;});(r.b=r.b||(D(o).resize(e,0,2).move(e,1,1))).stop().play((v.allwaysShowSelect?h||s:h)?v.lade:null,v.speed,v.fx);}});})(Leko,jQuery);