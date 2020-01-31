/**
 *【WSもくもく】よくある質問
 */
$(function(){
  var $q = $(".qa__content dt");

  $q.on("click",e =>{

    $this = $(e.currentTarget);
    $this.toggleClass("open");
    $this.next().slideToggle(300);

  })
});
