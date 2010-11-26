(function($,_){
	
	leko("li",{});
	
	leko("nav",{		
		/**
		* @property {string}
		* 读写。将什么tag的子元素作为所属列表项
		*/
		tag:"li",
		/**
		* @property {number}
		* 只读。包含的列表项总数。
		*/
		count:0,
		/**
		* @property {number}
		* 读写。执行slideshow时，是否允许自动暂停
		* 		0			:	永不自动暂停，直到使用slideshow(false)方法手动停止	
		* 		1*			:	当用户将鼠标定位到任意一列表项时暂停
		* 		2			:	当用户将鼠标定位当前选中列表项时暂停
		*/
		autoStop:1,
		/**
		* @property {number}
		* 读写。执行slideshow的时间间隔，毫秒数
		*/
		speed:3000,
		/**
		* @property {boolean,number}
		* 读写。将选中列表项的默认行为注册到哪一个事件
		* 		0|false*	:	click	
		* 		1|true		:	mouseover
		*/
		//event:0,
		/**
		* @property {boolean,number}
		* 读写。在列表执行update()方法时是否自动执行resize()方法
		* 		0|false*	:	不自动重置布局尺寸	
		* 		1|true		:	自动重置布局尺寸
		*/
		//autoSize:0,
		/**
		* @property {number}
		* 只读。列表的方向。在初始化实例时根据元素的className判断
		* 		0			:	横向列表。元素包含nav-h的className
		* 		1			:	纵向列表。元素包含nav-v的className
		* 		2			:	垂直列表。元素包含nav-z的className
		*/
		//dir:0,	
		/**
		* @property {boolean,number}
		* 读写。执行slideshow的播放方向
		* 		0|false		:	向右播放
		* 		1|true*		:	向左播放
		*/
		//rtl:0,	
		/**
		* @property {boolean,number}
		* 读写。是否在初始化完成后自动开始slideshow
		*/
		//autoStart:0,	
		/**
		* @method
		* 内部方法。依据所属列表项的布局尺寸更新导航栏的布局尺寸
		*/
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
					e.dim(0,0,o.width());
					h=Math.max(h,e.dim(1,0));
				}
				else w+=e.dim(0,0);
			});
			if(d==2)o.height(h);
			else if(!d)o.width(w+($.support.doubleFloatPadding?parseInt(o.css("paddingRight")):0));
		},
		/**
		* @method
		* 公用方法。获取全部所属的列表项。包含className为alone的子元素将被排除在外
		* @return	{jquery}
		*/
		all:function(){
			return $(">"+this.exp,this.$);
		},
		/**
		* @method
		* 内部方法。注册并初始化所属的列表项
		* @param	{jquery,element,string}	[listItem]
		* 		要被注册的单个列表项
		* @return	{jquery}
		* 		被注册的列表项
		*/
		initItem:function(e){
			var
				c=this,
				i=c.count++;
			return c[i]=$(e).li({
				list:c,
				index:i	
			});				
		},
		/**
		* @method
		* 公用方法。更新列表布局。在初始化列表、增加或删除列表项时会自动被执行
		*/
		update:function(){
			if(this.autoSize&&this.resize)this.resize();				
		},
		/**
		* @method
		* 公用方法。根据index或selector获取一系列列表项集合
		* @param	{jquery,element,string,number} ...	[exp]
		* @return	{jquery}
		*/
		items:function(){
			var
				a=arguments,
				i=a.length,
				c=this,
				x=c.all(),
				r=$(),
				n;
			while(i--){
				n=a[i];
				r=r.add($.isNumber(n)?x.eq(Math.max(0,Math.min(n,x.length-1))):$.isString(n)?x.filter(n):$(n));
			}
			return r;			
		},
		/**
		* @method
		* 公用方法。增加一个列表项
		* @param	{jquery,element,string}	[listItem]
		* 		要增加的单个列表项
		* @param	{boolean,number}	[ifPrepend]
		* 		0|false*	:	增加到列表最后位置	
		* 		1|true		:	增加到列表最前位置
		* @return	{jquery}
		* 		增加并初始化完成的单个列表项
		*/
		add:function(e,b){				
			e=this.initItem(e)[b?"prependTo":"appendTo"](this.$);
			this.update();
			return e;	
		},
		/**
		* @method
		* 公用方法。删除一个或一系列列表项
		*  @param	{jquery,element,string,number} ...	[exp]
		* 		要删除的列表项
		*/
		del:function(){
			var
				c=this;
			c.items.apply(c,arguments).each(function(i,e){
				delete c[$(e)._("li").index];
				if(e==c.selected[0])c.markItem(0,e,0,1);
				if(e==c.visited[0]) c.markItem(1);
			}).remove();
			c.update( );
		},
		/**
		* @method
		* 公用方法。获取一个列表项
		* @param	{jquery,element,string,number}	[exp]
		* 		传递给items()的参数
		* @param	{undefined,boolean,number}	[which]
		* 		undefined*	:	由items(e)获取到的e。如果获取失败，默认获取到第一个列表项
		* 		0|false		:	获取e的前一个列表项	
		* 		1|true		:	获取e的后一个列表项
		* @param	{boolean,number}	[ifRewind]
		* 		仅当which不为undefined才有效。用于指定向前或向后获取的规则
		* 		0|false*	:	使用循环规则。即将整个列表作为首尾连接的一整个循环来相邻获取	
		* 		1|true		:	使用反向规则。即如果e的前一个或后一个邻居不存在的话，则向e的另一侧获取
		* @return	{jquery}
		*/
		item:function(e,b,n){
			var
				c=this,
				a=c.all(),
				o=c.items(e),
				l=a.length-1,
				i=0,
				s=c.exp,
				t;
			if(!o[0])o=a.eq(0);
			else  i=a.index(o);
			return b===void 0?o:a.eq(!b&&i==0?(n?i+1:l):b&&i==l?(n?i-1:0):b?i+1:i-1);
		},
		/**
		* @method
		* 内部方法。为指定的一个列表项标记状态。如果该列表项当前不具有该状态，则为列表触发相应的自定义事件
		* @param	{boolean,number}	[stateType]
		* 		0|false*	:	标记为当前被选定(selected)状态，触发onnavselect事件	
		* 		1|true		:	标记为当前被访问(visited )状态，触发onnavvisit事件
		* @param	{jquery,element,string,number}	[exp]
		* 		传递给item()的参数
		* @param	{undefined,boolean,number}	[which]
		* 		传递给item()的参数
		* @param	{boolean,number}	[ifRewind]
		* 		传递给item()的参数
		*/
		markItem:function(t,i,b,n){
			var
				c=this,
				a=["select","visit"],
				m=a[!!t+0],
				s=m+"ed",
				e=(c[s]||$()).removeClass(s),
				o=c.item(i===void 0?"."+a[0]+"ed":i,b,n).addClass(s),
				d=e[0]==o[0];
			if(!d)c.$.trigger(c.className+m,[o,e]);
			c[s]=o;	
		},
		/**
		* @method
		* 公用方法。选择一个列表项。这会将列表项同时标记为当前被选定(selected)和当前被访问(visited )状态
		* @param	{jquery,element,string,number}	[exp]
		* 		传递给item()的参数
		* @param	{undefined,boolean,number}	[which]
		* 		传递给item()的参数
		*/
		select:function(i,b){
			with(this){
				markItem(0,i,b);
				markItem(1,i,b);
			};
		},
		/**
		* @method
		* 公用方法。启动或停止列表的幻灯片播放，即，循环依次将每个列表项选中
		* @param	{boolean,number}	[switch]
		* 		0|false*	:	停止幻灯片	
		* 		1|true		:	开始幻灯片
		*/
		slideshow:function(b){
			var
				c=this;
			if(b)c.sliding=c.sliding||window.setInterval(function(){
				var
					o=c.selected,
					s=c.autoStop,
					h=c.hovered;
				if(!s||!h||h==1&&$(h)[0]!=o[0])c.select(o,!c.rtl);
			},c.speed);
			else{
				window.clearInterval(c.sliding);
				delete c.sliding;
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
			while(i--)if(e.hasClass(n+"-"+d[i])){
				c.dir=i;
				break;
			}
			c.all().each(function(i,e){
				c.initItem(e);
			});	
			e.delegate(c.exp,"click mouseenter mouseleave",function(v){
				var
					o=$(this),
					r=[/k$/,/([ret])$/],
					i=2,
					b;
				if(o.parent()[0]==e[0])while(i--)if(r[i].test(v.type)){
					b=RegExp.$1=="r";
					if(i){
						c.hovered=b?o:void 0;
						if(b){
							window.clearTimeout(c._visit);
							c._visit=0;
							c.markItem(1,o);
						}
						else c._visit=c._visit||window.setTimeout(function(){
							if(c._visit)c.markItem(1);
						},250);	
					}
					if(i==c.event&&(!i||b))c.markItem(0,o);
				}				
			});
			c.initFX();
			c.markItem(0);
			c.markItem(1);		
			c.update();
			c.slideshow(c.autoStart);
		}
	});
	
	lekoEffect("nav",{
		leko:{
			/**
			* @method
			* @param	{object}	[lekoPlugin]
			* 		当前Leko插件类的当前实例
			* @param	{jquery}	[curElement]
			* 		应用插件的当前DOM元素
			* @param	{object}	[effectConfig]
			* 		当前效果在当前实例上的配置。也就是对curPlugin.curEffect的引用
			* @param	{string}	[effectName]
			* 		当前效果的名称
			*/
			func:function(s,t,g,f){
				var
					l=$(">."+f,t),
					i=s.dir,
					d=["width","height"][i],
					x=["left","top"][i],
					a=g.css;
				t.bind("navvisit",function(e,o,r){
					l.stop(true);
					var
						j=$$(o,"li")[f],
						k=s.speed,
						v=Math.min(k,g.speed||k),
						p=g.exp?$(g.exp,o):o,
						q=p,
						w=0,
						h=$.extend(true,{},a,j?j.css:0);
					do{
						w+=q.position()[x];
						if(q[0]==o[0])break;
					}
					while(q=q.offsetParent());	
					h[x]=w;	
					h[d]=p.dim(i,g.dim);
					if(g.inanimate)l.css(h);
					else l.animate(h,v,g.easing);
				});
			},
			conf:{
				/**
				* @property {number}
				* 读写。动态效果的执行时间，毫秒数
				*/
				speed:1000,
				/**
				* @property {number}
				* 读写。以元素的哪一种目标尺寸值作为效果动画参数
				* 		0			:	包含padding和borderWidth	
				* 		1			:	包含padding和borderWidth和margin
				* 		2			:	包含padding
				* 		3*			:	都不包含，即样式表值
				*/
				dim:3,
				/**
				* @property {string}
				* 读写。缓动函数名称
				*/
				easing:"outback"
				/**
				* @property {boolean,number}
				* 读写。是否禁用转换动画，直接应用最终效果
				*/
				//inanimate:0
				/**
				* @property {string}
				* 读写。选择符。用于决定用当前列表项的哪一个字元素作为动态效果的位置参照对象。缺省为当前列表项本身
				*/
				//exp:undefined
			}	
		},
		neon:{
			func:function(s,t,g){
			}	
		}
	});
	
})(jQuery,Leko);