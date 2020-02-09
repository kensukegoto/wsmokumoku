/**
 * 【WSもくもく】お知らせ
 */
$(function(){

  // start
  $.ajax({
    url: "./information.json",
    dataType: "json"
  })
  .done(function(json){

    var idx = 0; // idxはindexの略の意味でよく使われる
    var $info = $(".info__list .item");
    $info.find("time").text(json[idx].date);
    $info.find("p").text(json[idx].value);

    var time = 500;
    $info.css("transition","opacity " + time + "ms");

    setInterval(function(){

      if(idx === json.length -1){
        idx = 0;
      } else {
        idx = idx + 1;
      }
      $info.css("opacity",0);

      setTimeout(function(){
        $info.find("time").text(json[idx].date);
        $info.find("p").text(json[idx].value);
        $info.css("opacity",1);
      },time);

    },5000)

  });

});