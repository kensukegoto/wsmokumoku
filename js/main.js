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