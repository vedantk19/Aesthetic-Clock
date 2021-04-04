var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var audio = new Audio("divine dusk.wav");

var showCurrentTime = function () {
  var clock = document.getElementById("clock");
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (hours > 12) {
    hours = hours - 12;
    meridian = "PM";
  } else {
    hours = hours;
    meridian = "AM";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

  clock.innerText = clockTime;
};

var updateClock = function () {
  var time = new Date().getHours();
  showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

function hourMenu() {
  var select = document.getElementById("wakeUphour");
  var hour = 12;

  for (i = 1; i <= hour; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
hourMenu();

function minMenu() {
  var select = document.getElementById("wakeUpmin");
  var min = 59;
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
minMenu();

function secMenu() {
  var select = document.getElementById("wakeUpsec");
  var sec = 59;
  for (i = 0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
secMenu();

function alarm() {
  var ap = document.getElementById("ampm");
  var meridianValue = ap.options[ap.selectedIndex].value;

  var hour = document.getElementById("wakeUphour");
  var hoursValue = hour.options[hour.selectedIndex].value;

  var minute = document.getElementById("wakeUpmin");
  var minuteValue = minute.options[minute.selectedIndex].value;

  var second = document.getElementById("wakeUpsec");
  var secondValue = second.options[second.selectedIndex].value;

  if (minuteValue < 10) {
    minuteValue = "0" + minuteValue;
  }

  if (secondValue < 10) {
    secondValue = "0" + secondValue;
  }

  var alarmTime =
    hoursValue + ":" + minuteValue + ":" + secondValue + " " + meridianValue;

  console.log(alarmTime);

  setInterval(function () {
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > 12) {
      hours = hours - 12;
      meridian = "PM";
    } else {
      hours = hours;
      meridian = "AM";
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    if (alarmTime == clockTime) {
      audio.play();
    }
  }, 1000);
}

var ringBtn = document.getElementById("setAlarm");
ringBtn.addEventListener("click", alarm);

var stopBtn = document.getElementById("stopAlarm");
stopBtn.addEventListener("click", () => {
  var ap = (document.getElementById("ampm").disabled = false);
  var hour = (document.getElementById("wakeUphour").disabled = false);

  var minute = (document.getElementById("wakeUpmin").disabled = false);

  var second = (document.getElementById("wakeUpsec").disabled = false);

  audio.pause();
  audio.currentTime = 0;
});
