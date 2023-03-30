let currentTime = document.querySelector(".clock-container");

//-------Clock-------
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let time = `${hours}:${min}:${sec}`;
  currentTime.innerText = time;
  if (alarmTime == `${hours}:${min}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}
clock();
setInterval(clock, 1000);