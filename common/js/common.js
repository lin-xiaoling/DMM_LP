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


/*=======================
 スライダー＋動画
========================*/
var slideWrapper = $(".slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.find("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// Resize player
function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    resizePlayer(iframes, 16/9);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });

  //start the slider
  slideWrapper.slick({
    // fade:true,
    //autoplay:true, //自動で画像を切り替える
    autoplaySpeed:300,
    lazyLoad:"progressive",
    speed:300,
    arrows:true,
    dots:true,
    touchThreshold:30,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });
});

// Resize event
$(window).on("resize.slickVideoPlayer", function(){  
  resizePlayer(iframes, 16/9);
});



//FVアニメーション
var elttl = document.querySelector('.reson_point-left');	
var el01 = document.querySelector('.reson_point-left');
var el02 = document.querySelector('.reson_point-right');
var el03 = document.querySelector('.reson_point-bottom');
var el04 = document.querySelector('#keyv article ul .circle');
/*var colorsExamples = anime.timeline({
  endDelay: 500,
  easing: 'easeInOutQuad',
  direction: 'alternate'
})
.add({ targets: '.visible',  color: '#00ff00' }, 0)*/
  anime({
    targets: el01,
    translateX: 380,
    autoplay: true,
  	easing: 'easeInOutExpo',
  duration: 2000
  })
  anime({
    targets: el02,
    translateX: -380,
    autoplay: true,
  	easing: 'easeInOutExpo',
  delay: 400,
  duration: 2000
  })
  anime({
    targets: el03,
    translateY: '-60vw',
    autoplay: true,
  	easing: 'easeInOutExpo',
  delay: 800,
  duration: 2000
  })
  anime({
    targets: el04,
	 width: '15px',
	 height: '15px',
  borderRadius: ['0%', '50%'],
    autoplay: true,
  	easing: 'spring',
  delay: 1900,
  duration: 1000
  })


    const trigger = new ScrollTrigger.default()
    trigger.add('[data-trigger]')