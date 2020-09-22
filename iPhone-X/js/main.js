const screen = document.getElementById('screen')
const powerButton = document.getElementById('power')
const phone_call = document.getElementById('phone')
const bottomBar = document.getElementById('bar')

const week = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const hammerScreen = new Hammer(screen);
const hammerPower = new Hammer(powerButton);
const hammerBar = new Hammer(bottomBar);
delete Hammer.defaults.cssProps.userSelect;
function AppScreen() {
    var lockScreen = document.getElementById('lock-screen')
    var homeScreen = document.getElementById('home-screen')
    var unlockTime = document.getElementById('unlock-time')
    var appScreen = document.getElementById('app-screen')
    lockScreen.style.display = 'none'
    homeScreen.style.display = 'none'
    unlockTime.style.display = 'none'
    appScreen.style.display = 'block'
}
function HomeScreen(ev) {
    var lockScreen = document.getElementById('lock-screen')
    var homeScreen = document.getElementById('home-screen')
    var unlockTime = document.getElementById('unlock-time')
    var appScreen = document.getElementById('app-screen')
    lockScreen.style.display = 'none'
    homeScreen.style.display = 'block'
    unlockTime.style.display = 'block'
    appScreen.style.display = 'none'
}
function LockScreen() {
    var lockScreen = document.getElementById('lock-screen')
    var homeScreen = document.getElementById('home-screen')
    var unlockTime = document.getElementById('unlock-time')
    var appScreen = document.getElementById('app-screen')
    lockScreen.style.display = 'block'
    homeScreen.style.display = 'none'
    unlockTime.style.display = 'none'
    appScreen.style.display = 'none'
}

function ShowTime(){
    var NowDate=new Date();
    var h=NowDate.getHours();
    var m=NowDate.getMinutes();
    var M = NowDate.getMonth();
    var D = NowDate.getUTCDate();
    var w = NowDate.getUTCDay();
    if(h < 10) { 
        h = '0' + h;
    }
    if(m < 10) { 
        m = '0' + m;
    }
    document.getElementById('time').innerHTML = h+':'+m;
    document.getElementById('unlock-time').innerHTML = h+':'+m;
    document.getElementById('date').innerHTML = week[w] + ', ' + month[M] + ' ' + D;
    setTimeout('ShowTime()',60000);
}

hammerScreen.on('panleft panright', HomeScreen());
hammerBar.on('panleft panright', HomeScreen());
$(LockScreen());