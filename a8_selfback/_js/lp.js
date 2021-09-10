//------------------------------------------------
//	
//------------------------------------------------
$(function()
{
	//SETTING----------------------
	var DelayTime = 8000;//消す時間
	var FadeOutTime = 200;//フェイドアウト	
	//-----------------------------
	$("body").append("<div id='boxAttention'></div>");
	$("body").append("<div id='overlay'></div>");
	PageHeightVal = $(document).height();
	$("#overlay").height(PageHeightVal);
	
	//ClickEvents
	$("#overlay , #boxAttention").click(function () {
		$("#boxAttention").fadeOut(FadeOutTime);
		$("#overlay").fadeOut(FadeOutTime);
	});
	//TimeOut
	setTimeout(function(){
		$("#overlay , #boxAttention").fadeOut(FadeOutTime);
	},DelayTime);
});

$(function(){
	$(window).scroll(function ()
	{
		if ($(this).scrollTop() > 100)
		{
			$('#pagetop').fadeIn(); } else { $('#pagetop').fadeOut();
		}
	});
});


//------------------------------------------------
//	
//------------------------------------------------

(function(jQuery) {
	jQuery.fn.scRoller = function() {
		return this.each(function() {
			jQuery(this).click(function() {
				jQuery('html,body').animate({
					scrollTop: jQuery(jQuery(this).attr("href")).offset().top -75
				});
				return false;
			});
		});
	};
})(jQuery);

jQuery(function(){
	jQuery(".anchor_link [href^=#]").scRoller();
});