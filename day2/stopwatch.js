let count = 0;
let startTimer = () => {};

document.getElementById("startbtn").addEventListener("click", () => {
    startTimer = setInterval( () => {
        document.getElementById("displayText").innerText = ++count;
    },1000);
});

document.getElementById("stopbtn").addEventListener("click", () => {
    const time = document.getElementById("displayText").innerText;
    const text = document.createElement("p");
    text.innerText = `Stopped at time ${time}s.`;
    document.querySelector(".watchText").append(text);
    clearInterval(startTimer);
})

document.getElementById("resetbtn").addEventListener("click", () => {
    count = 0;
    document.getElementById("displayText").innerText = count;
    clearInterval(startTimer);
});

document.getElementById("getbtn").addEventListener("click", () => {
    const time = document.getElementById("displayText").innerText;
    const text = document.createElement("p");
    text.innerText = `Stopped at time ${time}s.`;
    document.querySelector(".watchText").append(text);
});

document.getElementById("clearbtn").addEventListener("click", (e) => {
    document.querySelector(".watchText").innerHTML='';
});