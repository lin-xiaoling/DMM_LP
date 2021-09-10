

//<!-- ▼可視範囲で順番にスライドイン・アウト -->
$(function(){
	$(window).scroll(function (){

		$('.wrap-delay').each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var delaySpeed = 100;
			var fadeSpeed = 500;
			var judge = (imgPos - windowHeight + windowHeight/5);
			if (scroll > judge){
				if($('.wrap-delay').hasClass('flag')){
					$('.wrap-delay li').each(function(i){
						$(this).delay(i*(delaySpeed)).animate({opacity:'1',bottom:'20px'},fadeSpeed);
					});
					$(".wrap-delay").removeClass("flag");
				}
			} else {
				if(!$('.wrap-delay').hasClass('flag')){

					$('.wrap-delay li').animate({opacity:'0',bottom:'0px'},fadeSpeed);
					$(".wrap-delay").addClass("flag");
				}
			}
		});

		$('.wrap-delay1').each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var delaySpeed = 100;
			var fadeSpeed = 500;
			var judge = (imgPos - windowHeight + windowHeight/5);

			if (scroll > judge){
				if($('.wrap-delay1').hasClass('flag1')){
					$('.wrap-delay1 li').each(function(i){
						$(this).delay(i*(delaySpeed)).animate({opacity:'1',bottom:'10px'},fadeSpeed);
					});
					$(".wrap-delay1").removeClass("flag1");
				}
			} else {
				if(!$('.wrap-delay1').hasClass('flag1')){

					$('.wrap-delay1 li').animate({opacity:'0',bottom:'0px'},fadeSpeed);
					$(".wrap-delay1").addClass("flag1");
				}
			}

		});

	});
});


//<!-- ▼navスライドスライドイン -->

$(function() {
	$(window).scroll(function () {
		var s = $(this).scrollTop(); //変数sにウィンドウのトップを取得
		var m = 50; //変数mにスクロール量を指示
		if(s > m) { //sがmを上回ると、出現させる
			$("#fixedBox").slideDown('slow');
		} else if(s < m) { //sがmを下回ると、消える
			$("#fixedBox").slideUp('slow'); }
	});
});

//<!-- ▼バナーのアコーディオン -->

$(function(){
	var nav_switch = 0;

	$("#camp_bnr").click(function(){
		if(nav_switch == 0){
			$("#camp_flow").slideDown("normal");
			nav_switch = 1;
		}
		else if(nav_switch == 1){
			$("#camp_flow").slideUp("normal");
			nav_switch = 0;
		}
	});
});

//<!-- ▼ページトップボタン -->


// JavaScript Document
$(function() {
	var showFlug = false;
	var topBtn = $('#page-top');
	topBtn.css('bottom', '-100px');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlug == false) {
				showFlug = true;
				topBtn.stop().animate({'bottom' : '20px'}, 200);
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

// 指定IDのaタグのリンク制御
// ID「agreement」のcheckboxがONでないと飛ばさせない
// checkboxがOFFの場合、アラートを表示させる
$(function(){
	$("#checkbox_link").click(function() {
		// ID「agreement」のcheckboxがONの場合リンクに飛ぶ
		if ($("#agreement:checked").val()) {
			return true;
		}
		// そうでない場合はアラート表示
		alert("「タイアップ詳細の内容に同意する」にチェックを入れてください。");
		return false;
	});
});



//<!-- fancybox -->
$(document).ready(function() {
	$('.fancybox').fancybox({  // ポップアップさせたい<a>要素を指定。
		'width':'802',
		'height':'606',
		'padding':'10'
		// オプションを記述
	});
});


//<!-- 動画再生 -->
$(function(){
	var videoElements = $('.videoAccesstrade');
	for(var i = 0 ; i < 3 ; i++ ){
		videoElements[i].addEventListener("ended", function(){
			var videoElement = $(this);
			videoElement.css('z-index','10');
			videoElement.prev('.thumbAccesstrade').css({'z-index':'20','display':'block'});
		});
	}
	$('.thumbAccesstrade').on('click' , function(){
		var videoElement = $(this).next('.videoAccesstrade');
		$(this).css('z-index','10');
		videoElement.css({'z-index':'20','display':'block'});
		videoElement[0].play();
	});
});

//<!-- スライダー -->
$(function() {
	$('.bxslider').bxSlider({
		auto:false,
		autoHover: true ,
		speed:500,
		mode:'fade',
	});
});
