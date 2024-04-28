const displayBox = document.getElementById("display-box")
const mathButtons = document.getElementsByClassName("math")
const acButton = document.getElementById("ac-btn")
const delButton = document.getElementById("del-btn")
const equalButton = document.getElementById("equal-btn")

// console.log(mathButtons); // HTML collection

const mathButtonsArray = Array.from(mathButtons)

// console.log(mathButtonsArray);

mathButtonsArray.forEach(btn => {
    // console.log(input);
    btn.addEventListener('click', () => {
        let input = btn.innerText
        let exixtingInput = displayBox.innerText
        displayBox.innerText = `${exixtingInput + input}`
    })
})

acButton.addEventListener('click', () => {
    displayBox.innerText = ''
})

delButton.addEventListener('click', () => {
    let existingText = displayBox.innerText
    let newText = existingText.slice(0, existingText.length - 1)
    displayBox.innerText = `${newText}`
})

equalButton.addEventListener('click', () => {
    let opertaion = displayBox.innerText
    // console.log(opertaion)
    let sol = eval(opertaion).toPrecision(4)
    console.log(typeof sol)
    displayBox.style.color = '#1bcb30'
    displayBox.innerText = `${sol}`

})
