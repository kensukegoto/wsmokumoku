/**
 * 【WSもくもく】トップにスクロールで戻るボタン
 */
$(function(){

  var $btn = $(".btnTop");
  $btn.on("click",function(){
    $("html,body").animate({scrollTop: 0 }, 500, "swing");
  });

  var winH = $(window).innerHeight();

  $(window).on("scroll",function(){
    if(winH / 2 < $(window).scrollTop()){
      $btn.addClass("active");
    }else{
      $btn.removeClass("active");
    }
  });

});