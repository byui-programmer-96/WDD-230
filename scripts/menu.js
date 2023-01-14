$(document).ready(function(){
	$('.circle-menu').on('click', function() {
		  $('.hambuger').toggleClass('is-active');        
		  $('body').toggleClass('open-menu');
		  $('.nav').toggleClass('is-active');
	  });
  
  })