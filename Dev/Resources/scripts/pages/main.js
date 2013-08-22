requirejs.config({
    paths: {
        prefixFree: ['/components/prefix-free/prefixfree.min'], 
        pictureFill: ['/components/picturefill/picturefill'],
        centerElements: ['/scripts/modules/helpers/centerElements']
    }
});

var flags = {
		opened: false,
		navBarStatus: ''
};


require(['prefixFree', 'pictureFill', 'centerElements'], function() {
	if(window.location.hash.length > 0) {
		window.location = window.location.origin;
	}
	var centerElements = require('centerElements');
	document.getElementsByTagName("main")[0].classList.add("locked");
	centerElements(['leftBlock', 'rightBlock']);
	
	(function(buttons) {
		var bLen  = buttons.length;
		
		var listener = function() {
			flags.navBarStatus.toggle("closed");
			if(flags.opened) return;
			
			document.getElementById("logo").src=("/resources/images/logo-32.png");
			document.getElementById("welcome").classList.add("opened");
			document.getElementById("contentBox").classList.add("opened");
			centerElements(['rightBlock']);
		};
		
		for(var i = 0; i < bLen; i++) {
			buttons[i].addEventListener("click", listener);
			buttons[i].addEventListener("touchStart", listener);
		}
	})(document.getElementsByClassName("navButton"));

	var menuButton 		= 	document.querySelector("#menuButton"); 
	var navBar 			= 	document.querySelector("#navBar");
	flags.navBarStatus 	= 	navBar.classList;
	menuButton.addEventListener('click', function() {
		flags.opened = true;
		flags.navBarStatus.toggle("closed");
	});
	menuButton.addEventListener('touchStart', function() {
		flags.opened = true;
		flags.navBarStatus.toggle("closed");
	});
});


