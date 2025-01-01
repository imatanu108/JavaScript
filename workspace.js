(function add(a,b){
    console.log(a+b)
})(2,4);

function infinitLoop() {
    console.log("What is happening man!!!")
    infinitLoop();
}

infinitLoop(); // Error: Maximum call stack size exceeded