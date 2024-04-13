// Promises, .then().catch(), async-await, fetch promises

// Basic Structure of a Promise
const myPromise = new Promise(function (resolve, reject) {
    // Do an asynchronous task like DataBase Call
    // If the operation is successful call resolve (result)
    // If there is an error call reject (error)
});

// Promise One
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed!");
        resolve();
    }, 1000);
});
promiseOne.then(function () {
    console.log("Promise Consumed!");
});
// Async task is completed!
// Promise Consumed!

//Promise Two
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2 is completed.");
    }, 1000);
}).then(() => {
    console.log("Async 2 resoloved.");
});
// Promise Consumed!
// Async task 2 is completed.

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "imatanu108", email: "imatanu108@gmail.com" });
    }, 1000);
});
promiseThree.then(function (user) {
    console.log(user);
});
// { username: 'imatanu108', email: 'imatanu108@gmail.com' }

//Promise Four
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = Math.random() > 0.5 ? null : true;
        if (!error) {
            resolve({ username: "imatanu108", email: "imatanu108@gmail.com" });
        } else {
            reject("Error: Something went wrong.");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // this return value will be sent in the next .then() if any
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally: The promise is either resolved or rejected.");
    });

// If no error -
// { username: 'imatanu108', email: 'imatanu108@gmail.com' }
// imatanu108
// else - Error: Something went wrong.
// Finally: The promise is either resolved or rejected. (this will be executed everytime)

// Handling a Promise with Async and Await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = Math.random() > 0.5 ? null : true;
        if (!error) {
            resolve({ username: "imalex", email: "alex@google.com" });
        } else {
            reject("Error: Something went wrong.");
        }
    }, 1000);
});

async function consumedPromiseFive() {
    try { // try block handles the promise if no errors occur
        const response = await promiseFive;
        console.log(response);
    } catch (error) { // if error occurs in the promise
        console.log(error);
    }
}

consumedPromiseFive();
// If no error -
// { username: 'imatanu108', email: 'imatanu108@gmail.com' }
// imatanu108
// else - Error: Something went wrong.


// Fetch Promises

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users") // fetch() takes time to get the data from the server
        const data = await response.json() // here this task will also take time so we've used await here
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

// getUsers();

// doing the task with .then() and .catch()

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    // here fetch("-") directly returns the response
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})