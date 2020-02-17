$(document).ready(function(){

	$('.arrow-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.arrow-up').slideDown(3000);
		} else {
			$('.arrow-up').slideUp(1000);
		}
	});

});

$(document).ready(function(){
	$("#slide_nav_button").click(function(){
	$('#slide_menu').animate({width:'toggle'},300);
	});
	}); 

	$(document).ready(function(){
		$('.prettySocial').prettySocial();
	  })    
	  