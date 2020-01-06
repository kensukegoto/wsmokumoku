// $('.mk-slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1 // 1枚ずつ
// });

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