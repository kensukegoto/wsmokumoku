/**
 * 【WSもくもく】WSもくもく会とは
 */
$(function(){

  var loopId = null;

  function makeCarousel(){

    var $carousel = $(".whatis__carousel");
    var $set = $(".whatis__carousel__set");
    var setW = $set.outerWidth();
    var winW = $(window).innerWidth();
    var num = Math.ceil(winW / setW);

    $carousel.empty();
  
    for(var i = 0;i < num * 2;i++){
      $carousel.append($set.clone());
    }

    var left = 0;
    var cW = num * setW;
    var stop = false;
    
    loopId = setInterval(function(){
      if(stop) return;
      if(cW + left === 1){
        left = 0;
      } else {
        --left;
      }
      $carousel.css("transform","translateX(" + left + "px");
    },33);

    $carousel.on("mouseenter",function(){
      stop = true;
    });
    $carousel.on("mouseleave",function(){
      stop = false;
    });
  }

  makeCarousel();

  var resizeId = null;
  var before = $(window).innerWidth();

  $(window).on("resize",function() {

    if(before === $(window).innerWidth()) return;
    before = $(window).innerWidth();

    clearTimeout(resizeId);

    resizeId = setTimeout(function(){
      clearInterval(loopId)
      makeCarousel();
    },300)

  });




});
