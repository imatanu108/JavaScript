// creating an create card function to create cards
function creatCard(imgURL = "milkyway-galaxy.jpg", name = "Alex", bio = "I build web apps.", followers = "1000") {
    const newDiv = document.createElement("div")
    newDiv.classList = "card"
    newDiv.innerHTML = `<img src="${imgURL}" alt="">
    <h2>${name}</h2>
    <div class="bio">${bio}</div>
    <div class="followers">Followers: ${followers}</div>`
    const container = document.querySelector('.container')
    container.append(newDiv);
}
// creatCard();

function getUserData(requestURL) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestURL, true) // async : true (other tasks will be keep on going on the backend)
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        // if the request is complete readyState is 4 (XMLHttpRequest.DONE)
        if (xhr.readyState === 4) {
            // if the response status is successful status code is 200
            if (xhr.status === 200) {
                console.log(this.responseText); // here the xhr.responseText is a string so we need tp convert it into JSON to perform any task
                const userData = JSON.parse(this.responseText);
                console.log(userData);
                // creating an card with these datas                      
                creatCard(userData.avatar_url, userData.name, userData.bio, userData.followers);
            } else {
                console.log('Error: ', xhr.status);
            }
        }
    }
    xhr.send();
}

// This is the modefied version to create unlimited cards like this from any requested url

const requestURL1 = "https://api.github.com/users/hiteshchoudhary"
getUserData(requestURL1);

const button = document.getElementById("button")
button.addEventListener("click", () => {
    // console.log("Button is clicked")
    let userInput = document.getElementById("input-field")
    let username = userInput.value
    let requestURL = `https://api.github.com/users/${username}`
    // console.log(requestURL);
    // console.log(typeof requestURL);
    getUserData(requestURL);
    userInput.value = ''
})
