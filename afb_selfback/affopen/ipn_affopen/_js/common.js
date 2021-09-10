//<!-- ▼navメニュー開閉 -->
$(function() {

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

	var nav_switch = 0;

	$("#camp_bnr").click(function(){
		if(nav_switch == 0){
			$("#camp_flow").slideDown("normal");
			nav_switch = 1;

			$(document).ready(function(e) {
				$('img[usemap]').rwdImageMaps();
			});
		}
		else if(nav_switch == 1){
			$("#camp_flow").slideUp("normal");
			nav_switch = 0;
		}
	});
});

//<!-- ▼navスライドスライドイン -->
$(function() {
	$(window).scroll(function () {
		var s = $(this).scrollTop(); //変数sにウィンドウのトップを取得
		var m = 50; //変数mにスクロール量を指示
		if(s > m) { //sがmを上回ると、出現させる
			$("#header").slideDown('slow');
		} else if(s < m) { //sがmを下回ると、消える
			$("#header").slideUp('slow'); }
	});
});


//<!-- ▼ページトップボタン -->
$(function() {
	var showFlug = false;
	var topBtn = $('#page-top');
	topBtn.css('bottom', '-100px');
	var showFlug = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlug == false) {
				showFlug = true;
				topBtn.stop().animate({'bottom' : '0.5em'}, 200);
			}
		} else {
			if (showFlug) {
				showFlug = false;
				topBtn.stop().animate({'bottom' : '-100px'}, 200);
			}
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});


//<!-- ▼スムーススクロール -->
$(function(){
	var headerHight = 50;
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top-headerHight;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

//<!-- ▼チェックボックス -->
$(function(){
	// 指定IDのaタグのリンク制御
	// ID「agreement」のcheckboxがONでないと飛ばさせない
	// checkboxがOFFの場合、アラートを表示させる
	$("#checkbox_link").click(function() {
		// ID「agreement」のcheckboxがONの場合リンクに飛ぶ
		if ($("#agreement:checked").val()) {
			return true;
		}
		// そうでない場合はアラート表示
		alert("「タイアップキャンペーン詳細の内容に同意する」にチェックを入れてください。");
		return false;
	})
});

//動画再生
window.onload = function(){
	if ( navigator.userAgent.indexOf('iPhone') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) ) {
		//smartphone-iphone
		if (navigator.userAgent.indexOf('iPhone') > 0) {
			$('.IPhoneBox').css( 'display', 'block');
			$('.AndroidBox').css( 'display', 'none');
			$('.box-empty').css( 'display', 'none');
			$('.IPhoneBox video').css('display', 'none');
			//<!-- 動画再生 -->
			$(function(){
				var videoElements = $('.IPhoneBox .videoAccesstrade');
				for(var i = 0 ; i < 3 ; i++ ){
					videoElements[i].addEventListener("ended", function(){
						this.webkitExitFullscreen();
					});
				}
				$('.thumbAccesstrade').on('click' , function(){
					var videoElement = $(this).next('.videoAccesstrade');
					videoElement[0].currentTime = 0;
					videoElement[0].play();
				});
			});

			//smartphone-android
		}else{
			$('.IPhoneBox').css( 'display', 'none');
			$('.AndroidBox').css( 'display', 'block');
			$('.box-empty').css( 'display', 'none');
			$('.AndroidBox video').css( 'display', 'none');
			//<!-- 動画再生 -->
			$(function(){
				var videoElements = $('.AndroidBox .videoAccesstrade');
				for(var i = 0 ; i < 3 ; i++ ){
					videoElements[i].addEventListener("ended", function(){
						this.webkitExitFullscreen();
					});
				}
				$('.thumbAccesstrade').on('click' , function(){
					var videoElement = $(this).next('.videoAccesstrade');
					$(this).css('z-index','0');
					videoElement.css('z-index','10');
					videoElement[0].play();
					videoElement[0].webkitRequestFullScreen();
				});
			});

		}
		//ipad
	}else if ( navigator.userAgent.indexOf('iPad') > 0 ) {
		$('.IPhoneBox').css( 'display', 'none');
		$('.AndroidBox').css( 'display', 'block');
		$('.box-empty').css( 'display', 'none');
		//<!-- 動画再生 -->
		$(function(){
			var videoElements = $('.videoAccesstrade');
			for(var i = 0 ; i < 6 ; i++ ){
				videoElements[i].addEventListener("ended", function(){
					var videoElement = $(this);
					videoElement.css('z-index','0');
					videoElement.prev('.thumbAccesstrade').css('z-index','10');
				});
			}
			$('.thumbAccesstrade').on('click' , function(){
				var videoElement = $(this).next('.videoAccesstrade');
				$(this).css('z-index','0');
				videoElement.css('z-index','10');
				videoElement[0].play();
			});
		});

		//Android Tablet
	}else if ( navigator.userAgent.indexOf('Android') > 0 ) {
		$('.IPhoneBox').css( 'display', 'none');
		$('.AndroidBox').css( 'display', 'block');
		$('.box-empty').css( 'display', 'none');
		//<!-- 動画再生 -->
		$(function(){
			var videoElements = $('.videoAccesstrade');
			for(var i = 0 ; i < 6 ; i++ ){
				videoElements[i].addEventListener("ended", function(){
					var videoElement = $(this);
					videoElement.css('z-index','0');
					videoElement.prev('.thumbAccesstrade').css('z-index','10');
				});
			}
			$('.thumbAccesstrade').on('click' , function(){
				var videoElement = $(this).next('.videoAccesstrade');
				$(this).css('z-index','0');
				videoElement.css('z-index','10');
				videoElement[0].play();
			});
		});

		//others
	}else{
		$('.IPhoneBox').css( 'display', 'none');
		$('.AndroidBox').css( 'display', 'block');
		$('.box-empty').css( 'display', 'none');
		//<!-- 動画再生 -->
		$(function(){
			var videoElements = $('.videoAccesstrade');
			for(var i = 0 ; i < 6 ; i++ ){
				videoElements[i].addEventListener("ended", function(){
					var videoElement = $(this);
					videoElement.css('z-index','0');
					videoElement.prev('.thumbAccesstrade').css('z-index','10');
				});
			}
			$('.thumbAccesstrade').on('click' , function(){
				var videoElement = $(this).next('.videoAccesstrade');
				$(this).css('z-index','0');
				videoElement.css('z-index','10');
				videoElement[0].play();
			});
		});
	}
}
//<!-- スライダー -->
$(window).on('load',function(){
	$('.bxslider').bxSlider({
		auto:false,
		autoHover: true ,
		speed:500,
		mode:'horizontal',
		controls:true,
		auto:false,
		touchEnabled:true,
		swipeThreshold: 80,
		preventDefaultSwipeY:false,
		infiniteLoop:false,
		nextSelector: '.nextSelector',
		prevSelector: '.prevSelector',
		nextText:'POINT 2',
		prevText:'POINT 2'
	});
	$('.pointSelector2 a').text('POINT 3');

	var maxHeight = 0;

	$(".bxslider li").each(function(){
		if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});
	$(".bxslider li").height(maxHeight);

});
