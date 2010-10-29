
(function($,window){

	var
		_=function(){},
		__,
		$$;

	_.extend=function(i,s){
		var
			p,c,k,h,
			t=_.prototype.extend;
		_._prototyping=true;
		p=new this;
		t.call(p,i);
		p._=function(){};
		delete _._prototyping;
		c=p.constructor;
		k=p.constructor=function(){
			if(!_._prototyping){
				var
					a=arguments,
					b=a[0];
				if(this._constructing||this.constructor==k){
					this._constructing=true;
					c.apply(this,a);
					delete this._constructing;
				}
				else if(b!=null)return(b.extend||t).call(b,p);
			}
		};
		h=this;
		k.ancestor=h;
		k.extend=h.extend;
		k.forEach=h.forEach;
		k.implement=h.implement;
		k.prototype=p;
		k.toString=h.toString;
		k.valueOf=function(t){
			return(t=="object")?k:c.valueOf();
		};
		t.call(k,s);
		if($.isFunction(k.init))k.init();
		return k;
	};

	_.prototype={	
		extend:function(s,v){
			if(arguments.length>1){
				var
					a=this[s];
				if(a&&(typeof v=="function")&&(!a.valueOf||a.valueOf()!=v.valueOf())&&/\b_\b/.test(v)){
					var
						m=v.valueOf();
					v=function(){
						var
							r,
							p=this._||_.prototype._;
						this._=a;
						r=m.apply(this,arguments);
						this._=p;
						return r;
					};
					v.valueOf=function(t){
						return(t=="object")?v:m;
					};
					v.toString=_.toString;
				}
				this[s]=v;
			}
			else if(s){
				var
					k,
					e=_.prototype.extend,
					h=["constructor","toString","valueOf"],
					i=_._prototyping?0:1,
					p={};
				if(!_._prototyping&&!$.isFunction(this))e=this.extend||e;
				while(k=h[i++])if(s[k]!=p[k])e.call(this,k,s[k]);
				for(k in s)if(!p[k])e.call(this,k,s[k]);
			}
			return this;
		}
	};

	_=_.extend({
		constructor:function(){
			this.extend(arguments[0]);
		}
	},{
		ancestor:Object,
		forEach:function(o,b,c){
			for(var k in o)if(this.prototype[k]===void 0)b.call(c,o[k],k,o);
		},
		implement:function(){
			for(var i=0,a;i<arguments.length;i++){
				a=arguments[i];
				if($.isFunction(a))a(this.prototype);
				else this.prototype.extend(a);
			}
			return this;
		},
		toString:function(){
			return String(this.valueOf());
		}
	});
	
	__=_.extend({
		constructor:function(n,e){
			this.$=e;
			n="data-leko-"+n;
			this.extend(eval("({"+(e.attr(n)||"")+"})"));
			e.removeAttr(n);
		}
	});
	
	$$=function(n,c,m){
		$.fn[n]=function(v){
			var
				f=_[n].extend(v);
			return this.each(function(i,e){
				e=$(e);
				if(!e.data(n))e.data(n,new f(n,e));
			});	
		}
		_[n]=(_[m]||__).extend(c);
	};
	
	window.Leko=window._=_;
	window.LekoPlugin=window.$$=$$;
	
	$.each(["String","Number","Object","Date","Boolean"],function(i,v){
		$["is"+v]=new Function("v","return v==v&&v!==null&&v!==void(0)&&v.constructor=="+v);
	});	
	
	$.fn.extend({
		_:$.fn.data,
		/**
		* 设置或获取当前第一个元素的各种高度宽度值
		* @param	{boolean,number}	[b]
		* 		0|false*	:	操作宽度值
		* 		1|true		:	操作高度值
		* @param	{number}			[m]
		* 		0*			:	包含padding和borderWidth	
		* 		1			:	包含padding和borderWidth和margin
		* 		2			:	包含padding
		* 		3			:	都不包含，即样式表值
		* @param	{number,string}	[v]
		* 		要设置的目标值。如果未提供，则获取当前值
		* @param	{boolean,number}	[t]
		* 		0|false*	:	指定v为绝对目标值	
		* 		1|true		:	指定v为相对当前值的增加或减少量的相对目标值
		* @return	{jquery|number}
		* 		设置完成并返回元素，或返回获取到的值
		*/
		dimension:function(b,m,v,t){
			b=!!b+0;			
			v=parseInt(v);
			var
				e=this,
				x=["idth","eight"][b],
				c=["outer","outer","inner",""],
				a=[],
				i=4;
			while(i--){
				c[i]=c[i]+(i<3?["W","H"]:["w","h"])[b]+x;
				a[i]=e[c[i]](c<2?c>0:void 0);
			}	
			return isNaN(v)?a[m]:e[c[3]](v+a[3]-(t?0:a[m]));
		}
	});
	
})(jQuery,window);