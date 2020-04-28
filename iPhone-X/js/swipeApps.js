
const home_page = document.getElementById('home-page')
const second_page = document.getElementById('second-page')

const hammerPageHome = new Hammer(home_page);
const hammerPageSecond = new Hammer(second_page);

hammerPageHome.on('panleft', function(ev) {
    if(ev.deltaX < -150) {
        home_page.style.left = "-280px";
        second_page.style.left = "0px";

    }
    else {
        home_page.style.left = ev.deltaX + "px";
        second_page.style.left = 280 + ev.deltaX + "px";
    }
});
hammerPageHome.on('panright', function(ev) {
    if(ev.deltaX > 150) {
        home_page.style.left = "0px";
        second_page.style.left = "280px";

    }
    else {
        home_page.style.left = ev.deltaX + "px";
        second_page.style.left = 280 + ev.deltaX + "px";
    }

});

hammerPageSecond.on('panleft', function(ev) {
    if(ev.deltaX < -150) {
        home_page.style.left = "-280px";
        second_page.style.left = "0px";

    }
    else {
        home_page.style.left = -280 + ev.deltaX + "px";
        second_page.style.left = ev.deltaX + "px";
    }

});
hammerPageSecond.on('panright', function(ev) {
    if(ev.deltaX > 150) {
        home_page.style.left = "0px";
        second_page.style.left = "280px";

    }
    else {
        home_page.style.left = -280 + ev.deltaX + "px";
        second_page.style.left = ev.deltaX + "px";
    }


});