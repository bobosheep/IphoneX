const screen = document.getElementById('screen')
const powerButton = document.getElementById('power')
const phone_call = document.getElementById('phone')
const camera = document.getElementById('camera')

const week = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const hammertime = new Hammer(screen);
const hammerPower = new Hammer(powerButton)
hammertime.on('swipe', function(ev) {
    var lockScreen = document.getElementById('lock-screen')
    var homeScreen = document.getElementById('home-screen')
    var unlockTime = document.getElementById('unlock-time')
    lockScreen.style.display = 'none'
    homeScreen.style.display = 'block'
    unlockTime.style.display = 'block'
});

function LockScreen() {
    var lockScreen = document.getElementById('lock-screen')
    var homeScreen = document.getElementById('home-screen')
    var unlockTime = document.getElementById('unlock-time')
    lockScreen.style.display = 'block'
    homeScreen.style.display = 'none'
    unlockTime.style.display = 'none'
}

function ShowTime(){
    var NowDate=new Date();
    var h=NowDate.getHours();
    var m=NowDate.getMinutes();
    var M = NowDate.getMonth();
    var D = NowDate.getUTCDate();
    var w = NowDate.getUTCDay();
    if(h < 10) h = '0' + h;
    if(m < 10) m = '0' + m;
        document.getElementById('time').innerHTML = h+':'+m;
        document.getElementById('unlock-time').innerHTML = h+':'+m;
        document.getElementById('date').innerHTML = week[w] + ', ' + month[M] + ' ' + D;
        setTimeout('ShowTime()',60000);
}