// Switch case in JavaScript

const dayIndex = 4
switch (dayIndex) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        break;
} // wednesday

// without break statement
switch (dayIndex) {
    case 1:
        console.log("sunday");
    case 2:
        console.log("monday");
    case 3:
        console.log("tuesday");
    case 4:
        console.log("wednesday");
    case 5:
        console.log("thursday");
    case 6:
        console.log("friday");
    case 7:
        console.log("saturday");
    default:
        break;
} 
// wednesday
// thursday
// friday
// saturday - if we don't use break, the all cases will be executed except default soon after a case matched