const boxes = document.querySelectorAll(".box")
        function changeColor() {
            boxes.forEach((box) => {
                let randomNumber1 = Math.round((Math.random() * 255) + 1);
                let randomNumber2 = Math.round((Math.random() * 255) + 1);
                let randomNumber3 = Math.round((Math.random() * 255) + 1);
                box.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
            })
        }
        changeColor(); // This will change the color everytime on reloading...
        const btn = document.getElementById('btn')
        btn.addEventListener('click', (e) => {
            console.log("Im clicked");
            changeColor(); // Invoking the function while clicking the button
        })