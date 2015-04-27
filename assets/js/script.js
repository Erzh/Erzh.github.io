$(document).ready(function(){
	var stickyNavThreshold = 150;
	var navBar = $('.main-navigation');;
	
	function stickyNav(){
		scrollTop = $(window).scrollTop();
		if(scrollTop >= stickyNavThreshold){
			navBar.addClass('sticky');		
		}else{
			navBar.removeClass('sticky');					
		}
	}
	
	$('#feature-list li:first').before($('#feature-list li:last'));
	
	
	
	
	$(window).scroll(function(){
		stickyNav();
		
		
	});
	
	
	$('#left-button').click(function(){
		var curFocus = $('.focus');
		var newFocus = curFocus.prev();
		
		curFocus.removeClass('focus');
		newFocus.addClass('focus');
		newFocus.css({'left': '-210px'});
		newFocus.animate({'left': 0}, 320);
			
		$('#feature-list li:first').before($('#feature-list li:last'));
		
		
	});
	
	$('#right-button').click(function(){
		var curFocus = $('.focus');
		var newFocus = curFocus.next();
		
		curFocus.removeClass('focus');
		newFocus.addClass('focus');
		newFocus.css({'left': '210px'});
		newFocus.animate({'left': 0}, 320);
		
		$('#feature-list li:last').after($('#feature-list li:first'));
	});
	
});