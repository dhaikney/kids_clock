function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + " : " + m + " : " + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var backgrounds = [
  'moana_1.jpg','moana_2.jpg', 'moana_3.jpg', 'moana_4.jpg'];


var imgIdx = 0;
function swapBackgrounds() {
  if(++imgIdx >= backgrounds.length) {
    imgIdx = 0;
  }
  console.log(backgrounds[imgIdx]);
  console.log(imgIdx);
  $('.background').animate({ opacity: 0}, 500, function() {
    $('.background').css("background-image", "url('img/" + backgrounds[imgIdx] + "')").animate({opacity: 1},500);
  });
}

setInterval(swapBackgrounds, 30000);