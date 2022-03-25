// buttons

let setTimeO = document.getElementById("set-timeout");
let setInt = document.getElementById("set-interval");
let stopInt = document.getElementById("stop-interval");

setTimeO.style.padding ="5px";
setInt.style.padding = "10px";
stopInt.style.padding = "15px";

// ex setTimeout
setTimeO.addEventListener("click",resolveAfter4Sec);

function resolveAfter4Sec() {
    setTimeout(() => {
        alert("Hei deg på!");
    },4000
    )
}

// ex setInterval
let interval;

function alertfunc() {
    alert("Jeg går evig hvert 5.")
}

function evigLoop() {
    interval = setInterval(alertfunc, 5000);    
}

function stopLoop() {
    clearInterval(interval);
} 

setInt.addEventListener("click", evigLoop);
stopInt.addEventListener("click", stopLoop);