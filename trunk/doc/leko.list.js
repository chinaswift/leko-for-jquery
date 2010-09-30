/*!
 * Leko for jQuery v1.0
 * http://www.lekolite.cn/
 *
 * 苏昱(苏小雨)作品
 * Copyright 2010, Rainer Su(rainersu@gmail.com)
 */

(function(_,$){var
L="li",W=["check","hover","focus"],R=/(?:er|in|us)$/i,X=[],Y=[],Z=[],I=W.length,T;while(I--){T=W[I];Z[I]="on"+T;X[I]="."+(Y[I]=T+"ed");};I=["click","mouseleave","mouseenter","focusin","focusout"];W=I.concat(["mouseout","mouseover","focus","blur"]);T=I.join(" ");_.fn("list",function(o,v,d,n){var
l=v.live||L,i=W.length,m=v.event||0;while(i--){d[i]=(function(i){return function(s){var
m,e,b,r=$(),x=X[i],y=Y[i],c=$(l,o),z=v[Z[i]],h=$.effect(n,v.effect);h=(h?h(o,v,d,n):{})[Z[i]];if(s===void 0||$.isString(s))r=c.filter(s=="all"?"*":(s=="inverse"?":not("+x+")":x));else{s=[].concat(s);m=s.length;while(m--){e=s[m];r=r.add($.isNumber(e)?c.eq(e):e);}}
if(i||!v.multi)r=r.eq(0);c.each(function(m,e){e=$(e);b=!!(r.index(e)+1);if(h)h(e,b,e.currents(L,$.extend(true,{},v,e.defaults(L))),e.runtimes(L));if(z&&b!=e.hasClass(y))z.call(o,m,e);e.toggleClass(y,b);});d[y]=r.length&&r;};})(i);}
o.undelegate(l,T,d.f).delegate(l,T,d.f=function(e){var
t=e.type,i=W.length,x=$(this),s=$(l+X[0],o),b;while(i--)if(W[i]==t)break;b=(i==1||i==2||i==5||i==6)?1:(i==3||i==4||i==7||i==8)?2:0;if(b)d[b](R.test(t)?x:s);if(!b||b==m)d[0](x);});},{},{lava:function(o,v,d,n){return{oncheck:function(e,b,c,r){console.log(c);}}}});})(Leko,jQuery);