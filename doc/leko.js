/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(window,document,$,undefined){$.each(["String","Number","Object","Date","Boolean"],function(i,v){$["is"+v]=new Function("v","return v==v&&v!==null&&v!==void(0)&&v.constructor=="+v);});var
_$=window._,_={ver:function(a,b){a=String(a||0).split('.');b=String(b||0).split('.');for(var c,i=0,x=Math.max(a.length,b.length);i<x;i++){c=(parseInt(a[i])||0)-(parseInt(b[i])||0);if(c)return c>0;}
return true;},fit:function(n,i,a){return Math.max(Math.min(n,a),i);},average:function(){var
v=arguments,i=v.length,n=i,m=0;while(i--)m+=v[i];return m/n;},noConflict:function(){window._=_$;return this;},fn:function(){for(var m=0,a=arguments,x=a.length,n,f;m<x;m+=4){n=a[m];f=(function(f){return function(){var
l=arguments.callee;return this.each(function(){var
o=$(this),n=l.fn,d=o.conf(n);return f(o,$.extend(true,{},l.ini,l.arguments[0],d),d,n)!==false;});}})(a[m+1]);f.fn=n;$.fn[n]=f;f['ini']=a[m+2];}}},b=$.browser,s=$.support;$.fn.conf=function(n){var
o=this,d=o.data(n);if(!d)o.data(n,d=eval("({"+(o.attr(n)||"")+"})"));return d;}
window.Leko=window._=_;$.each(["webkit","opera","msie","mozilla"],function(i,v){_[v]=function(n,m){return!!(b[v]&&_.ver(b.version,n)!=(m||0));}});s.rgba=_.msie(9)||_.mozilla(1.9)||_.webkit(525)||_.opera(10);if(_.msie(9,1)){$.each("article,aside,audio,canvas,datalist,details,eventsource,figure,footer,header,hgroup,mark,meter,nav,output,progress,section,time,video".split(','),function(i,v){document.createElement(v);});}})(window,window.document,jQuery);