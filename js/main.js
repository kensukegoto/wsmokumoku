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

});