// Example -1
function addNumbers (num1, num2, callBack) {
    let result = num1 + num2;
    callBack(result);
}

// defining the callBack function separatly
function displayData(result) {
    console.log('Result: ', result);
}

addNumbers(2,4,displayData); // Result: 6

// Example - 2
function multiplyNumbers (num1, num2, callBack) {
    let result = num1 * num2;
    callBack(result);
}
// directly defining the function inside the main function

multiplyNumbers(3,5, (result) => {
    console.log('Result: ', result);
}); // Result: 15

// Handling CallBack errors

function fetchData (callBack) {
    setTimeout(() => {
        const error = Math.random() < 0.5 ? null : new Error('Failed to fetch data!');
        const data = error ? null : 'Data fetched successfully!'
        callBack(error, data);
    }, 1000)
}
function displayFetchedData (error, data) {
    if (error) {
        console.error("Error: ", error.message);
    } else {
        console.log("Data: ", data);
    }
}

fetchData (displayFetchedData);  // either "Data Fetched Successfully!" or "Failed to fetch Data."