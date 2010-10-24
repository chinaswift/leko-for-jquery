
(function($,window){

	var
		_=function(){
	
		};

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
		$.extend(k,{
			ancestor:h,
			extend:h.extend,
			forEach:h.forEach,
			implement:h.implement,
			prototype:p,
			toString:h.toString,
			valueOf:function(t){
				return(t=="object")?k:c.valueOf();
			}
		});
		t.call(k,s);
		if($.isFunction(k.init))k.init();
		return k;
	};

_.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this._ || _.prototype._;
					this._ = ancestor;
					var returnValue = method.apply(this, arguments);
					this._ = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = _.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = _.prototype.extend;
			// if this object has a customised extend method then use it
			if (!_._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = _._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
_ = _.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
	

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
  eat: function(food) {
    if (food instanceof Mouse) this._();
      else this.say("Yuk! I only eat mice.");
    }
});

var Mouse = Animal.extend();


var xxx=new Animal("xxx");
var aaa=new Cat("aaa");
var yyy=new Mouse("yyy");
var zzz=new Mouse("zzz");
xxx.say(1);aaa.say(2);yyy.say(3);
xxx.eat(yyy);aaa.eat(yyy);xxx.eat(yyy);aaa.eat(zzz);aaa.eat(xxx);
	

})(jQuery,window);