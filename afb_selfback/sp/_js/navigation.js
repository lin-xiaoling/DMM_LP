var nav_switch = 0;

$("#btn_menu").click(function(){
	if(nav_switch == 0){
		$("#hide_nav").slideDown("fast");
		nav_switch = 1;
	}
	else if(nav_switch == 1){
		$("#hide_nav").slideUp("fast");
		nav_switch = 0;
	}
});

$(".navigation_link [href^=#]").click(function(){
//	$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top - 41 }, 'slow','swing');
	$("#hide_nav").slideUp("fast");
	nav_switch = 0;
	
	return false
});