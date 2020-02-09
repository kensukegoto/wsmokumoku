/**
 * 【WSもくもく】お知らせ一覧（モーダル）
 */
$(function(){

  $.ajax({
    url: "./information.json",
    dataType: "json"
  })
  .then(function(json){

    // 一覧作成
    var $allInfo = $(".info__modal__list");
    for(var i = 0; i < json.length; i++){
      var info = "<li><time>" + json[i].date + "</time><p>" + json[i].value + "</p></li>";
      $allInfo.append(info);
    }
    
    $(".info__modal__close").on("click",function(){
      $(".info__modal").fadeOut();
    });
    $(".info__modal__open").on("click",function(){
      $(".info__modal").fadeIn();
    });

  });

});