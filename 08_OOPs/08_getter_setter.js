// Getter and Setter in JavaScript
// Gettre an Setter is used in Javascript to control access of the object properties, restricting the properties to be accessed directly

class User {
    constructor(username, age) {
        this._username = username // prefixing with '_'(underscore) to indicates its a private property
        this._age = age
    }
    // Getter for name
    get username(){
        return this._username.toUpperCase();
    }

    // Setter for name
    set username(newName){
        this._username = newName
    }

    get age(){
        return this._age;
    }
    set age(newAge) {
        if (newAge > 0){
            this._age = newAge
        } else {
            console.log("Age must be a positive number.")
        }
    }
}


const user1 = new User("imalex", 24);
console.log(user1._age); // 24
console.log(user1.age); // 24
user1.age = 26
console.log(user1.age); // 26
console.log(user1.username); // IMALEX


// Getter and Setter for Objects

const myObject  = {
    _value: 10,

    // getter
    get value(){
        return this._value;
    },

    set value(newValue) {
        if (newValue > 0){
            this._value = newValue
        } else {
            console.log("Value cannot be negetive.")
        }
    }
}

console.log(myObject.value); // 10
myObject.value = -5 // Value cannot be negetive.
myObject.value = 12 
console.log(myObject.value); // 12