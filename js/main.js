$('.mk-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1 // 1枚ずつ
});

$.ajax({
  url: "./infomation.json",
  dataType: "json"
})
.then(json => {

  var len = json.length;
  var i = 0 % len;
  var info = json[i];  

  var duration = 300;

  var list = document.querySelector(".mk-info__lists .list");
  var time = list.querySelector("time");
  var value = list.querySelector("p");

  list.style.transition = "opacity " + duration + "ms";

  time.textContent = info.date;
  value.textContent = info.value;

  setInterval(()=>{

    list.style.opacity = 0;

    setTimeout(()=>{

      i = ( i + 1 ) % len
      info = json[i];
      time.textContent = info.date;
      value.textContent = info.value;
      list.style.opacity = 1;
    },duration)

  },5000);


  var modalLists = document.querySelector(".mk-info__modal__lists");

  for(var i = 0; i < len; i++){
    var modalList = "<li><time>" + json[i].date + "</time><p>" + json[i].value + "</p></li>";
    modalLists.innerHTML += modalList;
  }

});

/**
 * お知らせ一覧
 */
(()=>{

  var btnModal = document.querySelector(".mk-info__more");
  var btnModalClose = document.querySelector(".mk-info__close");
  
  var modal = document.querySelector(".mk-info__modal");
  var duration = 300;
  modal.style.transition = "opacity " + duration + "ms";
  var modalFlag = false;
  
  
  btnModal.addEventListener("click",modalToggle);
  btnModalClose.addEventListener("click",modalToggle);
  
  function modalToggle(e){
  
    if(modalFlag) return;
  
    modalFlag = true;
  
    modal.classList.toggle("open");
  
    if(modal.classList.contains("open")){
      modal.style.visibility = "visible";
      modal.style.opacity = 1;
    }else{
      modal.style.opacity = 0;
    }
    setTimeout(()=>{
  
      if(!modal.classList.contains("open")) modal.style.visibility = "hidden";
      modalFlag = false;
      
    },duration)
  }

})();


/**
 * カルーセル
 */
(()=>{
  var garally = document.querySelector(".mk-what__grlly__items");
  var copy = garally.cloneNode(true);
  var winW = window.innerWidth;
  var onesetW = garally.offsetWidth;
  var loop = Math.ceil(winW / onesetW);

  var limit = loop * onesetW;
  for(var i = 0; i < loop * 2 - 1; i++){
    var clone = [...copy.cloneNode(true).children];
    clone.forEach( n =>{
      garally.appendChild(n)
    })
  }

  var pos = 0;
  var stop = false;

  setInterval(()=>{

    if(stop) return;

    if ((limit  + pos) === 0 ){
      pos = 0;
    } else {
      --pos;
    }
    garally.style.transform = "translateX(" + pos + "px)";

  },16);

  garally.addEventListener("mouseenter",()=>{
    stop = true;
  });
  garally.addEventListener("mouseleave",()=>{
    stop = false;
  });

})();


/**
 * タブ
 */
(()=>{

  var active = document.querySelector(".mk-theme__nav .active");
  var tabs = document.querySelector(".mk-theme__items");
  var theme = active.dataset.theme;

  activeTab(theme);
  document.querySelector(".mk-theme__nav").querySelectorAll("li").forEach(e => {
 
    e.addEventListener("click", t => {

      var target = t.currentTarget.dataset.theme;
      document.querySelector(".mk-theme__nav .active").classList.remove("active");
      t.currentTarget.classList.add("active");

      activeTab(target)
    })
  });

  function activeTab(active){
    tabs.querySelectorAll(".item").forEach(e => {
      var myTheme = e.dataset.theme;
      if(active === myTheme){
        e.style.display = "flex";
      }else{
        e.style.display = "none";
      }
    })
  }

})();


/**
 * ページネーション
 */
(()=>{

  var wrapper = document.querySelector(".mk-events__items");
  var items = wrapper.querySelectorAll(".item");
  var pageNum = Math.ceil(items.length / 6);

  // ページネーション作成
  var pN = document.querySelector(".mk-events__pages");
  for(var i = 1,l = pageNum;i <= l; i++){
    var p = document.createElement("li");
    var a = document.createElement("a");
    p.appendChild(a);
    p.addEventListener("click",e => {
      var dataPage = +e.currentTarget.dataset.page;
      showItems(dataPage);
    });
    a.innerText = i;
    p.dataset.page = i;
    
    pN.appendChild(p);
  }
  
  // 何ページ目のコンテンツか
  for(var i = 0,l = items.length;i < l;i++){
    var page = Math.ceil((i + 1) / 6);
    items[i].dataset.page = page;
  }

  showItems(1);

  function showItems(page){

    if(pN.querySelector("li.active")){
      pN.querySelector("li.active").classList.remove("active");
    }

    pN.querySelectorAll("li")[page-1].classList.add("active");

    for(var i = 0,l = items.length;i < l;i++){

      var dataPage = +items[i].dataset.page;

      if(page === dataPage){
        items[i].classList.add("active");
      } else {
        items[i].classList.remove("active");
      }
    }
  }

})();


/**
 * バリデーション
 */
(()=>{

  var form = document.querySelector(".mk-contact__form");
  var inputs = form.querySelectorAll("input,textarea");
  var submit = form.querySelector(".mk-contact__form button");

  inputs.forEach( input => {
    input.addEventListener("focus",validate);
    input.addEventListener("input",validate);
  });


  function validate(e){

    var value = e.target.value.trim();
    var name = e.target.name;
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
      e.target.nextElementSibling.style.visibility = "visible";
      e.target.dataset.validate = false;
    }else{
      e.target.nextElementSibling.style.visibility = "hidden";
      e.target.dataset.validate = true;
    }

    var submitFlag = [];
    inputs.forEach( input => {
      submitFlag.push(input.dataset.validate);
    })
    
    if(submitFlag.indexOf("false") === -1){
      submit.disabled = false;
    }

  }

  
})();

/**
 * トップへ戻る
 */
(()=>{

  var main = document.querySelector("main");
  var start = window.pageYOffset + main.getBoundingClientRect().top;

  var btnTop = document.querySelector(".btnTop");

  btnTop.addEventListener("click",e =>{
    e.preventDefault();
    $("html, body").animate({scrollTop: 0 }, 500, "swing")
  });

  window.addEventListener("scroll",e => {
      if( start  < window.pageYOffset ){
        btnTop.classList.add("active");
      } else {
        btnTop.classList.remove("active");
      }
  })

})();