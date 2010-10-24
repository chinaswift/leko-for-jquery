
(function($,window){

	var
		_=function(){};

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

	window.Leko=window._=_=_.extend({
		constructor:function(){
			this.extend(arguments[0]);
		}
	},{
		ancestor:Object,
		forEach:function(o,b,c){
			for(var k in o)if(this.prototype[k]===undefined)b.call(c,o[k],k,o);
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
	
})(jQuery,window,undefined);

var Animal = _.extend({
  constructor: function(name) {
    this.name = name;
  },

  name: "",

  eat: function() {
    this.say("Yum!");
  },

  say: function(message) {
    console.log(this.name + ": " + message);
  }
});

var Cat = Animal.extend({
  eat: function(food){
    if(food instanceof Mouse)this._();
      else this.say("Yuk! I only eat mice.");
    }
});
var Mouse =  Animal.extend({
  eat: function(food){
    if(food instanceof Cat)this.say("Shit!");
      else this._();
    }
});
var xxx=new Animal("xxx");
var aaa=new Cat("aaa");
var yyy=new Mouse("yyy");
var zzz=new Mouse("zzz");
xxx.say(1);
aaa.say(2);
yyy.say(3);
zzz.say(4);
aaa.eat(xxx);aaa.eat(zzz);zzz.eat(aaa);zzz.eat(yyy);
