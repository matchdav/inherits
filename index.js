(function ( root, factory ) {
	if( typeof define !== 'undefined' && define.amd ) {
		define([],factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.inherits = factory();
	}
})(this, function (){

	var hasOwn = {}.hasOwnProperty;

	return function inherits(child, parent) {
		for (var key in parent) {
			if (hasOwn.call(parent, key)) child[key] = parent[key];
		}
		function ctor() {
			this.constructor = child;
		}
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();
		//CoffeeScript API
		child.__super__ = parent.prototype;
		//node API
		child.super_ = parent;
		return child;
	};

});

