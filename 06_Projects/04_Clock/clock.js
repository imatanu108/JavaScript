const clock = document.querySelector(".clock-box")
setInterval(() => {
    let date = new Date()
    let time = date.toLocaleTimeString()
    clock.innerHTML = `${time}`
}, 1000);