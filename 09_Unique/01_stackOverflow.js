// A stack overflow in JavaScript Occurs when the call stack exceeds its maximum size due to too many function calls being added without being completed.

function infinitLoop() {
    infinitLoop();
    console.log("What is happening man!!!")
}

infinitLoop(); // Error: Maximum call stack size exceeded

// How to Prevent --> To prevent stack overflow errors, make sure that the recursive function have proper termination conditions to stop the recursion.