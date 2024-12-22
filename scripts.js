//Variables
let clicks = 0;

//end

function add() {
    clicks++;
    document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
    +localStorage.setItem("savedClicks", clicks);
}

function load() {
    clicks = +localStorage.getItem("savedClicks");
    document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
}