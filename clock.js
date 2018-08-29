var nightTime = false;
var audio = new Audio('img/wake_up.mp3');

var wakeupHour = 7;
var wakeupMinute=15;
var bedTimeHour = 20;
var nightTimeInterval = 10000;// 10 * 60 * 1000;
var dayTimeInterval = 5 * 60 * 1000;
var interval =  setInterval(swapBackgrounds, dayTimeInterval) ;

function isItDayTime(h,m) {
    return ( (h > wakeupHour && h < bedTimeHour ) ||
        (h == wakeupHour && m >=wakeupMinute) );
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (!nightTime && !isItDayTime(h,m)) {
        nightTime = true;
        clearInterval(interval);
        swapBackgrounds();
        interval = setInterval(swapBackgrounds, nightTimeInterval);
    }
    else if (nightTime && isItDayTime(h,m)){
        // Time to wakeup! 
        nightTime = false;
        clearInterval(interval);
        swapBackgrounds();
        audio.play();
        interval = setInterval(swapBackgrounds, dayTimeInterval);
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
    'moana_1.jpg','moana_2.jpg', 'moana_3.jpg', 'moana_4.jpg',
    'dalmation_1.jpg','dalmation_2.jpg','dalmation_3.jpg','dalmation_4.jpg',
    'dalmation_5.jpg', 'dalmation_6.jpg', 'dalmation_7.jpg'
];
var night_backgrounds = [
  'night_1.jpg','night_2.jpg', 'night_3.jpg', 'night_4.jpg', 'night_5.jpg'];

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
