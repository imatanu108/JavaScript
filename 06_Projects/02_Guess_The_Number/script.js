const input = document.getElementById("input")
        const button = document.getElementById("btn")
        const comments = document.getElementById("comments")
        const randomNumber = Math.round((Math.random() * 100) + 1);
        
        button.addEventListener("click", checkUserGuess);
        let guessCount = 0;

        function checkUserGuess () {
            let userInput = Number(input.value);
            guessCount++;
            
            if (userInput === randomNumber) {
                comments.innerHTML = `Congratulations! You guess the right number '${randomNumber}' in ${guessCount} guesses.\nSCORE: ${110-10*guessCount}`;
                comments.style.color = 'green'
                // button.disabled = true;
                input.disabled = true;
                button.innerHTML="Play Again!"
                button.addEventListener("click", ()=> {
                    location.reload();
                })
                
            } else if (guessCount == 10) {
                comments.innerHTML = `No guesses left! Better luck next time. (Number: ${randomNumber})`;
                comments.style.color = 'orange';
                // button.disabled = true;
                input.disabled = true;
                button.innerHTML="Play Again!"
                button.addEventListener("click", ()=> {
                    location.reload();
                })
            } else if (isNaN(userInput)) {
                comments.innerHTML = `Please Enter a Number! You have ${10-guessCount} guesses left.`;
                comments.style.color = 'orange';
            } else {
                let highOrLow = "too high!";
                if (userInput < randomNumber) {
                    highOrLow = "too low!";
                }
                comments.innerHTML = `The number you've entered is ${highOrLow}. You have ${10-guessCount} guesses left.`;
                comments.style.color = 'orange';
            }
            input.focus();
            input.value = ''
        }