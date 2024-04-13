const myPromise1 = new Promise((resolve, reject) => {
    let randomNumber = Math.random()
    if (randomNumber > 0.5) {
        console.log(`Promise 1 resolved with value ${randomNumber}`);
        resolve(randomNumber);
    } else {
        console.log(`Promise 1 rejected with value ${randomNumber}`);
        reject("Error in handling Promise 1")
    }
})

// this is an async task this will wait, but other tasks will keep on going in the background
myPromise1.then((randomNumber) => {
    console.log(randomNumber);
    console.log("Successful! Promise 1 consumed.");
}).catch((error) => {
    console.log(error);
})


const myPromise2 = new Promise((resolve, reject) => {
    let randomNumber = Math.random()
    if (randomNumber > 0.5) {
        console.log(`Promise 2 resolved with value ${randomNumber}`);
        resolve(randomNumber);
    } else {
        console.log(`Promise 2 rejected with value ${randomNumber}`);
        reject("Error in handling Promise 2");
    }
})

// this is an async task this will wait, but other tasks will keep on going in the background
async function myPromise2Handler (){
    try {
        const response = await myPromise2
        console.log(response);
        console.log("Successful! Promise 2 consumed.");  
    } catch (error) {
        console.log(error);
    }
}
myPromise2Handler() // invoking the async function to handle the promise

// overall output:

// Both promise resolved -
// Promise 1 resolved with value 0.920539378470721 [synchronous task -1]
// Promise 2 resolved with value 0.876256221339615 [synchronous task -2]
// 0.920539378470721 [async task -1]
// Successful! Promise 1 consumed.
// 0.876256221339615 [async task -2]
// Successful! Promise 2 consumed.

// 1 resolved 2 rejected -
// Promise 1 resolved with value 0.651463760991488
// Promise 2 rejected with value 0.3408944910825491
// 0.651463760991488
// Successful! Promise 1 consumed.
// Error in handling Promise 2

// 2 resolved 1 rejected -
// Promise 1 rejected with value 0.46061233280199554
// Promise 2 resolved with value 0.7073053909274638
// 0.7073053909274638
// Successful! Promise 2 consumed.
// Error in handling Promise 1

// both rejected
// Promise 1 rejected with value 0.21202458186323203
// Promise 2 rejected with value 0.2996170435850407
// Error in handling Promise 2
// Error in handling Promise 1