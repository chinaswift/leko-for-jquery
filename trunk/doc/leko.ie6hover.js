/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(window,_,undefined){var
a=window.document.styleSheets,x=[],w=_.msie(7,1),p=w?"hover":"focus",t=w?"mouseenter mouseleave":"focusin focusout",z=":"+p,b,c,d,e,f,g,h,k;if(_.msie(8,1))for(b=0;b<a.length;b++){k=a[b];c=k.rules;d=c.length;while(d--){e=c[d];f=e.selectorText;g=e.style.cssText;if(new RegExp(z).test(f)){h=f.replace(z,"");if(!w||!/\ba\b/i.test(h)){k.addRule(f.replace(":","."),g,d);x.unshift(h);}}}}
if(x.length)$(_.unique(x).join(",")).live(t,function(){$(this).toggleClass(p);});})(window,Leko);