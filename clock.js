var nightTime = false;


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (s >= 20 || s < 7 ) {
        nightTime = true;
    }
    else
        {nightTime = false;}
    document.getElementById('clock').innerHTML =
    h + " : " + m + " : " + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var day_backgrounds = [
  'moana_1.jpg','moana_2.jpg', 'moana_3.jpg', 'moana_4.jpg'];
var night_backgrounds = [
  'night_1.jpg','night_2.jpg', 'night_3.jpg', 'night_4.jpg'];

var imgIdx = 0;
function swapBackgrounds() {
    var backgrounds;
    if (nightTime) {
        backgrounds = night_backgrounds;
    }
    else {
       backgrounds = day_backgrounds;
    }
  if(++imgIdx >= backgrounds.length) {
    var audio = new Audio('img/alarm_beep.mp3');
audio.play();
    imgIdx = 0;
  }

  $('.background').animate({ opacity: 0}, 500, function() {
    $('.background').css("background-image", "url('img/" + backgrounds[imgIdx] + "')").animate({opacity: 1},500);
  });
}

setInterval(swapBackgrounds, 5000);