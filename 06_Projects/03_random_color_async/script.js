const startButton = document.getElementById("start")
        const stopButton = document.getElementById("stop")

        function changeColor () {
            let randomNumber1 = Math.round((Math.random() * 255) + 1);
            let randomNumber2 = Math.round((Math.random() * 255) + 1);
            let randomNumber3 = Math.round((Math.random() * 255) + 1);
            document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
        }

        startButton.addEventListener ("click", (e) => {
            const changingColor = setInterval(changeColor, 1000);
            stopButton.addEventListener("click", (f) => {
                clearInterval(changingColor);
            })
        })
