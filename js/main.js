/**
 * ハンバーガーメニュー
 */
(()=>{
  var time = 300;
  var $btn = $(".burger__btn");
  $btn.css("transition","background-color " + time + "ms")
  $btn.find("span").css({
    transition: "transform " + time + "ms"
  });

  $btn.on("click",function(){
    $(this).toggleClass("open");
    $(this).next().fadeToggle(time);
  });

  $(".burger__modal__menu li a").on("click",function(){

    // モーダルを閉じる
    $btn.click();

    return false;

    var speed = 500;
    var href = $(this).attr("href");
    var position = $(href).offset().top - $("header").innerHeight();
    $("html,body").animate({scrollTop: position},speed,"swing");

  });

})();


/**
 * pick up(スライダー)
 */
(()=>{

  $('.pickup__slider').slick({
    appendArrows: $(".pickup"),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, // 1枚ずつ
    responsive:[
      {
          breakpoint: 960,
          settings:{
              slidesToShow:2,
          }
      },
      {
          breakpoint: 600,
          settings:{
              slidesToShow:1,
          }
      }
    ]
  });
  
})();

/**
 * お知らせ
 */
(()=>{
  $.ajax({
    url: "./infomation.json",
    dataType: "json"
  })
  .then(json => {

    var time = 500;

    var $info = $(".info__list .item");
    $info.css("transition","opacity " + time + "ms");

    var idx = 0;

    setInterval(()=>{
      $info.css("opacity",0);
      // または$.animate
      setTimeout(()=>{
        idx = (idx + 1) % json.length;
        changeInfo(json[idx]);
        $info.css("opacity",1);
      },time)
      
    },5000);

    changeInfo(json[idx]);

    function changeInfo(info){
      $info.find("time").text(info.date);
      $info.find("p").text(info.value);
    };

    // 一覧作成
    var $allInfo = $(".info__modal__list");
    for(var i = 0; i < json.length; i++){
      var info = "<li><time>" + json[i].date + "</time><p>" + json[i].value + "</p></li>";
      $allInfo.append(info);
    }
    // モーダル表示
    var time2 = 300;
    var $modalOpen = $(".info__modal__open");
    var $modalClose = $(".info__modal__close");
    var $modal = $(".info__modal") ;

    $modalOpen.on("click",modalToggle);
    $modalClose.on("click",modalToggle);

    function modalToggle(){
      $modal.fadeToggle(time2);
    }

  });

})();

/**
 * カルーセル
 */
(()=>{

  return false;
  var loopId = null;

  function makeCarousel(){

    var $carousel = $(".whatis__carousel");
    var $set = $(".whatis__carousel__set");
    var setW = $set.outerWidth();
    var winW = $(window).innerWidth();
    var num = Math.ceil(winW / setW);

    $carousel.empty();
    // num * 2 - 1 は１つのセットが最初からあるから
    for(var i = 0;i < num * 2;i++){
      $carousel.append($set.clone());
    }

    var left = 0;
    var cW = num * setW;
    var stop = false;
    
    loopId = setInterval(()=>{
      if(stop) return;
      if(cW + left === 1){
        left = 0;
      } else {
        --left;
      }
      $carousel.css("transform","translateX(" + left + "px");
    },33);

    $carousel.on("mouseenter",()=>{
      stop = true;
    });
    $carousel.on("mouseleave",()=>{
      stop = false;
    });
  }

  makeCarousel();

  var resizeId = null;

  $(window).on("resize",()=> {
    
    clearTimeout(resizeId);

    resizeId = setTimeout(()=>{
      clearTimeout(loopId)
      makeCarousel();
    },300)

  });




})();

/**
 * タブ
 */
(()=>{
  var $nav = $(".theme__nav li");

  $nav.on("click",function(){
    $(".theme__nav .active").removeClass("active");
    $(this).addClass("active");
    var idx = $(".theme__nav li").index(this);
    tabChange(idx);
  });

  $nav.eq(0).click();

  function tabChange(idx){

    $(".theme__content .item").each( function (i) {
      if(i === idx){
        $(this).addClass("active");
        setTimeout(()=>{
          $(this).css({
            opacity: 1
          })
        },1)
        
      }else{
        $(this).removeClass("active");
        $(this).css({
          opacity: 0
        })
      }
    })
  }

})();

/**
 * アコーディオン
 */
(()=>{
  var $q = $(".qa__content dt");

  $q.on("click",e =>{

    $this = $(e.currentTarget);
    $this.toggleClass("open");
    $this.next().slideToggle(300);

  })
})();