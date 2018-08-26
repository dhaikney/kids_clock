var nightTime = false;
var audio = new Audio('img/alarm_beep.mp3');
var interval =  setInterval(swapBackgrounds, 5 * 60 * 1000) ;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (!nightTime && (h >= 20 || h < 7 )) {
        nightTime = true;
        clearInterval(interval);
        swapBackgrounds();
        interval = setInterval(swapBackgrounds, 10 * 60 * 1000);
    }
    else if (nightTime && h >=7 && h <=20){
        // Time to wakeup! 
        nightTime = false;
        clearInterval(interval);
        swapBackgrounds();
        audio.play();
        interval = setInterval(swapBackgrounds, 5 * 60 * 1000);
    }
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
    imgIdx = 0;
  }

  $('.background').animate({ opacity: 0}, 1000, function() {
    $('.background').css("background-image", "url('img/" + backgrounds[imgIdx] + "')").animate({opacity: 1},1000);
  });
}
