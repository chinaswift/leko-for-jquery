/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(window,document,$,undefined){$.each(["String","Number","Object","Date","Boolean"],function(i,v){$["is"+v]=new Function("v","return v==v&&v!==null&&v!==void(0)&&v.constructor=="+v);});$.leko={};var
_$=window._,_={ver:function(a,b){a=String(a||0).split('.');b=String(b||0).split('.');for(var c,i=0,x=Math.max(a.length,b.length);i<x;i++){c=(parseInt(a[i])||0)-(parseInt(b[i])||0);if(c)return c>0;}
return true;},fit:function(n,i,a){return Math.max(Math.min(n,a),i);},unique:function(a){var
n,x={},i=a.length;while(i--)if(x[n=a[i]])a.splice(i,1);else x[n]=1;return a;},average:function(){var
v=arguments,i=v.length,n=i,m=0;while(i--)m+=v[i];return m/n;},noConflict:function(){window._=_$;return this;},fn:function(){for(var m=0,a=arguments,x=a.length,n,f;m<x;m+=3){n=a[m];f=(function(f){return function(){var
l=arguments.callee;return this.each(function(){var
o=$(this),n=l.fn,d=o.leko(n);return f(o,$.extend(true,{},$.leko[n],l.arguments[0],d),d,n)!==false;});}})(a[m+1]);f.fn=n;$.fn[n]=f;$.leko[n]=$.extend({},a[m+2]);}},pseudoClass:function(){var
a=window.document.styleSheets,x=[],w=_.msie(7,1),p=w?"hover":"focus",t=w?"mouseenter mouseleave":"focusin focusout",z=":"+p,b,c,d,e,f,g,h,k;if(_.msie(8,1))for(b=0;b<a.length;b++){k=a[b];c=k.rules;d=c.length;while(d--){e=c[d];f=e.selectorText;g=e.style.cssText;if(new RegExp(z).test(f)){h=f.replace(z,"");if(!w||!/\ba\b/i.test(h)){k.addRule(f.replace(":","."),g,d);x.unshift(h);}}}}
if(x.length)$(_.unique(x).join(",")).live(t,function(){$(this).toggleClass(p);});},html5Tag:function(){if(_.msie(9,1)){$.each("article,aside,audio,canvas,datalist,details,figure,footer,header,hgroup,mark,meter,nav,output,progress,section,summary,time,video".split(','),function(i,v){document.createElement(v);});}}},$b=$.browser,$s=$.support,$d;$.each(["webkit","opera","msie","mozilla"],function(i,v){_[v]=function(n,m){return!!($b[v]&&_.ver($b.version,n)!=(m||0));}});$s.rgba=_.msie(9)||_.mozilla(1.9)||_.webkit(525)||_.opera(10);$d=_.msie(9)&&1||_.mozilla("1.9.1")&&2||_.webkit(522)&&3||_.opera(10.5)&&1;$s.shadow=$d&&["b","MozB","WebkitB"][$d-1]+"oxShadow";$.fn.extend({leko:function(n){var
o=this,d=o.data(n);if(!d)o.data(n,d=eval("({"+(o.attr(n)||"")+"})"));return d;},visible:function(){with(this)return{d:css("display")!="none",v:css("visibility")!="hidden"};},getShadow:function(){var
d=$b.msie&&$(this).data("shadow");return d&&d.$?d:{};},andShadow:function(){with(this)return add(getShadow().$);},transparent:function(b){return this.css({visibility:b?"hidden":"visible"});},bubble:function(){}});$.each(["To","By"],function(i,v){$.fn["move"+v]=function(x,y){var
m=$.isNumber(x),n=$.isNumber(y);return this.each(function(z,o){o=$(o);if(i)z=o.position();if(m)o.css({left:(i?z.left+x:x)+"px"});if(n)o.css({top:(i?z.top+y:y)+"px"});});};$.fn["resize"+v]=function(w,h,b){var
m=$.isNumber(w),n=$.isNumber(h);return this.each(function(z,o){o=$(o);if(m)o.width(function(n,x){return i?w+x:b?w+x-o.outerWidth():w;});if(h)o.height(function(n,x){return i?h+x:b?h+x-o.outerHeight():h;});});};});window.Leko=window._=_;_.html5Tag();})(window,window.document,jQuery);