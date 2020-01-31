/**
 * 【WSもくもく】３つのテーマ
 */
$(function(){
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
        var $this = $(this);
        setTimeout(function(){
          $this.css({
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

});
