/**
 * 【WSもくもく】お知らせ
 */
$(function(){
  $.ajax({
    url: "./infomation.json",
    dataType: "json"
  })
  .then(json => {

    var time = 500;

    var $info = $(".info__list .item");
    $info.css("transition","opacity " + time + "ms");

    var idx = 0;

    setInterval(function(){
      $info.css("opacity",0);
      // または$.animate
      setTimeout(function(){
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

  });

});