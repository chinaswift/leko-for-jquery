(function($,_){
	
	$$("li",{
		
	});
	
	$$("list",{
		max:Number.MAX_VALUE,
		min:Number.MIN_VALUE,
		tag:"li",
		count:0,
		event:0,
		all:function(){
			return $(">"+this.exp,this.$);
		},
		items:function(){
			var
				a=arguments,
				i=a.length,
				c=this,
				l=c.all(),
				r=$(),
				n;
			while(i--){
				n=a[i];
				r=r.add($.isNumber(n)?c[n]:$.isString(n)?l.filter(n):$(n));
			}
			return r;			
		},
		add:function(e,b){				
			e=this.initItem(e)[b?"prependTo":"appendTo"](this.$);
			this.update();
			return e;	
		},
		del:function(i){
			var
				c=this;
			c.items(i).each(function(i,e){
				delete c[$(e)._("li").index]; 
			}).remove();
			c.update( );
		},
		initItem:function(e){
			var
				c=this,
				i=c.count++;
			return c[i]=$(e).li({
				list:c,
				index:i	
			});				
		},
		update:function(){
			if(this.autoSize&&this.resize)this.resize();				
		},
		select:function(){
			var
				c=this,
				w="selected",
				n="."+w,
				m=":not("+n+")",
				f=$.makeArray,
				s=c.items.apply(c,arguments).filter(m),
				r=c.items(n),
				
				
				g=s.add(r),
				
				
				t=g.length||!c.min?void 0:c.all().not(s.add(r)),
				a=f(s).concat(f(r)).concat(f(t)),
				l=a.length,
				x=Math.min(Math.max(l,c.min),c.max),
				e,z,b;
			while(l--){
				e=$(a[l]);
				b=l<x;
				z=b?w:m;
				e.toggleClass(w,!e.is(z)&&b);
				//if(!e.is(z))e.toggleClass(w,b);
			}
		},
		constructor:function(n,e){
			var
				c=this,
				d=["h","v","z"],
				i=d.length;
			c._(n,e);
			c.event=!!c.event+0;
			c.exp=this.tag+":not(.alone)";
			while(i--)if(e.hasClass("list-"+d[i])){
				c.dir=i;
				break;
			}
			c.all().each(function(i,e){
				c.initItem(e);
			});
			c.update();
			e.delegate(c.exp,"click mouseenter mouseleave",function(v){
				var
					o=$(this),
					t=["click","hover"],
					r=[/k$/,/([ret])$/],
					i=2,
					b;
				if(o.parent()[0]==e[0])while(i--)if(r[i].test(v.type)){
					b=RegExp.$1=="r";
					if(i==c.event&&(!i||b))c.select(o);
					if(c[t])c[t](o,b);
				}				
			});	
		}
	});
	
	$$("nav",{
		max:1,
		min:1,
		autoSize:true,
		resize:function(){
			var
				c=this,
				d=c.dir,
				o=c.$,
				w=0,
				h=o.height();
			c.all().each(function(i,e){
				e=$(e);
				if(d==2){
					e.dimension(0,1,o.width());
					h=Math.max(h,e.outerHeight(true));
				}
				else w+=e.dimension(0,1);
			});
			if(d==2)o.height(h);
			else if(!d)o.width(w+($.support.doubleFloatPadding?parseInt(o.css("paddingRight")):0));
		}
	},"list");
		
	$(function(){
		$(".nav").nav({y:6});
		$(".nav").each(function(i,e){
			var
				c=$(e)._("nav");
			c.del($(e).children().eq(0));
			c.add("<li><a href='#'>新增的项目</a></li>");
		});
	});
	
})(jQuery,Leko);