/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su(rainersu@gmail.com)
 */

(function(_,$){_.fn("gradient",function(o,v,d,n){var
l=v.live,h=!!v.focus,m=h?"focusin focusout":"mouseenter mouseleave",f=function(e){if(!v.disabled){var
o=$(this),b=l?o.runtimes(n):d,w=l?o.currents(n,$.extend(true,{},v,o.defaults(n))):v,t=/(?:t|e)$/.test(e.type),g=w.css,q=b.$,p=_.colors.properties,j=g[p[2]],i=3;if(!q){delete g[p[2]];if(j)while(i<7)g[p[i++]]=j;q={};b._={};for(i in g){b._[i]=o.css(i);q[i]=_.solidColor(this,i);}
b.$=q;}
o.stop().animate(t?q:g,w.speed,w.fx,t?function(){for(var i in b._)o.css(i,b._[i]);}:void 0);}};if(l)o.undelegate(l,m,d[m]).delegate(l,m,d[m]=f);else o.unbind(m,d[m]).bind(m,d[m]=f);},{speed:800});})(Leko,jQuery);