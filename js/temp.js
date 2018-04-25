$(document).ready(function(){
	
	'use strict';
	//$("html").niceScroll();
	$(".header").height($(window).height());
	$("html").niceScroll({cursorcolor:'#f7600e'});
	$('.header .arrow i').click(function(){
		$('html,body').animate({
			scrollTop:$('.features').offset().top
		},1000);
	});
	$('.show').click(function(){
		$('.our-work .hidden').fadeToggle('1000');
		if($(this).text() === 'Show More'){
		$(this).text('hidden');
		}else{
			$(this).text('show more');
		}
	});
	 
	 var left = $('.testm .fa-chevron-left'),
		 right = $('.testm .fa-chevron-right');
	function checkclient(){
		
		if($('.testm .client:first').hasClass('active')){
			left.fadeOut();
		}
		else{
			left.fadeIn();
		}
		$('.testm .client:last').hasClass('active')?right.fadeOut() : right.fadeIn();
	}
	checkclient();
	$('.testm  i').click(function(){
		if( $(this).hasClass('fa-chevron-right')){
			$('.active').fadeOut(400,function(){
				$(this).removeClass('active').next('.client').addClass('active').fadeIn(400);
				checkclient();
			});
		}
		else if( $(this).hasClass('fa-chevron-left')){
			$('.active').fadeOut(400,function(){
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn(400);
				checkclient();
			});
		}
	});
	$(window).scroll(function(){
		 console.log( $(this).scrollTop());
		if($(this).scrollTop() >= 650){
			$('.fa-chevron-up').show(500)
		}
		else{
			$('.fa-chevron-up').hide(500)
		}
	});
	$('.fa-chevron-up').click(function(){
		$('html,body').animate({
			scrollTop:0
		},2000);
	});
	
});