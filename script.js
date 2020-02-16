
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(3000);
		} else {
			$('.ir-arriba').slideUp(1000);
		}
	});
 
});

$(document).ready(function(){
	$("#slide_nav_button").click(function(){
	$('#slide_menu').animate({width:'toggle'},300);
	});
	});