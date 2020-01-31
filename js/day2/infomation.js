/**
 * お知らせ
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

});