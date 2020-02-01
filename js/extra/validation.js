/**
 * 【WSもくもく】フォームのバリデーション
 */
$(function(){

  var $inputs = $(".contact__form input,.contact__form textarea");
  var $submit = $(".contact__form button");

  $inputs.on("input",function(){
    validate($(this));
  });
  $inputs.on("focus",function(){
    validate($(this));
  });

  function validate($input){

    var value = $input.val().trim();
    var name = $input.attr("name");
    var error = false;
    var pattern = "";

    switch(name){

      case "name":
        if(value === "") error = true;
        break;
      case "mail":
        pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if(!pattern.test(value)) error = true;
        break;
      case "content":
        if(value === "") error = true;
        break;
      default:
        break;
    }

    if(error){
      $input.next().show();
      $input.removeClass("isClear");
    }else{
      $input.next().hide();
      $input.addClass("isClear");
    }

    if($inputs.length === $(".contact__form .isClear").length){
      $submit.attr("disabled",false)
    }else{
      $submit.attr("disabled",true)
    }
  }

});
