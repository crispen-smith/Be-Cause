requirejs.config({
    paths: {
        prefixFree: ['/components/prefix-free/prefixfree.min']
		,   pictureFill: ['/components/picturefill/picturefill']
		,	classListShim: ['/scripts/modules/classListShim/classListShim']
		//,	jquery: ['/components/jquery/jquery.min']
    }
});

require(['prefixFree', 'pictureFill', 'classListShim'], function() {
var blocks = document.getElementsByClassName("leftBlock");
var bLen = blocks.length;

for(var i = 0; i < bLen; i++) {
	(function(el) {
		 el.style.marginTop = "-" + (el.clientHeight/2) + "px";
	}(blocks[i]));
 
}

var main = document.getElementsByTagName("main")[0];
main.classList.add("locked");
//		var menuButton 		= 	document.querySelector("#menuButton"); 
//		var navBar 			= 	document.querySelector("#navBar");
//		var navBarStatus 	= 	navBar.classList;
//		menuButton.addEventListener('click', function() {
//			navBarStatus.toggle("closed");
//		menuButton.addEventListener('touchStart', function() {
//			navBarStatus.toggle("closed");
//		})
//	});
});


