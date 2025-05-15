function getTime(){
    document.querySelector(".clock").innerText = new Date().toLocaleTimeString();
}
setInterval(getTime,1000);