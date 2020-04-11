
$(document).ready(function(){
    $('.carousel').carousel();
	AOS.init();
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	
});

	var options = {
	  strings: ['我們是兩個高中生組成的團隊。'],
	  typeSpeed: 70
	};
	
	var typed = new Typed('#type-text', options);
	typed.stop();
	
	var wow2 = new WOW(
	  {
		boxClass:     'wow2',
	    callback:     function(box) {
			typed.start();
	    },
	    scrollContainer: null 
	  }
	);
	
	wow2.init();