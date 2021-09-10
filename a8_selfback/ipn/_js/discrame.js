//------------------------------------------------
//	ディスクレーマ
//------------------------------------------------
$(function()
{
	//SETTING----------------------
	var AttImg ="_img/basic_img/attention.png";	//イメージ
	var AttImgAlt ="ここからは、DMM.com証券のウェブサイトです";	//イメージのalt
	var DelayTime = 8000;						//消す時間
	var FadeOutTime = 200;						//フェイドアウト
	//-----------------------------

	//Append
	$("body").append("<div id='boxAttention'><img src='"+AttImg+"' alt='"+AttImgAlt+"' ><div id='overlay'></div></div>");
	

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
//------------------------------------------------
//	
//------------------------------------------------