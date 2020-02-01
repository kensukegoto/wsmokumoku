/**
 * 【WSもくもく】お知らせ一覧（モーダル）
 */
$(function(){
  $.ajax({
    url: "./infomation.json",
    dataType: "json"
  })
  .then(json => {


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