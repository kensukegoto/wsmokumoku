/**
 * 【WSもくもく】もくもく会一覧
 */
$(function(){

  var $items = $(".events__inner .item");
  // ページネーション作成
  var $pn = $(".events__pages");
  var num = Math.ceil($items.length / 6);
  for(var i = 1,l = num;i <= l; i++){
    var li = "<li><a>" + i + "</a></li>";
    $pn.append(li);
  };

  $(".events__pages li").on("click",function(){
    var page = $(".events__pages li").index(this);
    page += 1;
    showItems(page,true);
  })

  // 何ページ目のコンテンツか
  for(var i = 0,l = $items.length;i < l;i++){
    var page = Math.ceil((i + 1) / 6);
    $items.eq(i).addClass("page-" + page);
  }

  showItems(1,false);

  function showItems(page,animation){
    // ページネーションのactive切り替え
    $(".events__pages li.active").removeClass("active");
    $(".events__pages li").eq(page - 1).addClass("active");

    $items.removeClass("active");
    $(".events__inner").find(".page-" + page).addClass("active");

    if(animation){
      var pos = $(".events__inner").offset().top - $("header").innerHeight();
      $("html,body").animate({scrollTop:pos},300,"swing")  }
    
  }

});
