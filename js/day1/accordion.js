/**
 *【WSもくもく】よくある質問
 */
$(function(){
  var $q = $(".qa__content dt");

  $q.on("click",function(){

    $this = $(this);
    $this.toggleClass("open");
    $this.next().slideToggle(300);

  })
});
