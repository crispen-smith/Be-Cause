requirejs.config({
	paths: {
		classListShim: ['/scripts/modules/shims/classList/classListShim'],
		addEventListenerShim: ['/scripts/modules/shims/addEventListener/addEventListenerShim']
	}
});

define(function(require, exports, module) {
	 require("addEventListenerShim");
	 require("classListShim");
	
	return function(classes) {
		cLen = classes.length;
		for(var i = 0; i < cLen; i++) {
			(function(className) {
				var blocks = document.getElementsByClassName(className);
					var bLen = blocks.length;
					for(var i = 0; i < bLen; i++) {
						(function(el) {
							el.style.marginTop = "-" + (el.clientHeight/2) + "px";
						}(blocks[i]));
	 
					}
			})(classes[i]);
		}
	};
});