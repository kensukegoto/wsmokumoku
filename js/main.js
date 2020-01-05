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

  // var i = 0;
  // var info = json[0];
  // $(".mk-info__lists .list time").text(info.date);
  // $(".mk-info__lists .list p").text(info.value);
  
  // setInterval(()=>{

  //   ++i;
  //   var info = json[i];
  //   $(".mk-info__lists .list time").text(info.date);
  //   $(".mk-info__lists .list p").text(info.value);
  // },1000);

})