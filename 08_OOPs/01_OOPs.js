// Basic Object Literal, introduction to new keyword, this keyword

const employee = {
    name: "Alex",
    age: 34,
    email: "alex@microsoft.com",
    working: true,
    getUserData: function(){
        console.log("Got the user details from the server.");
        console.log(`Name: ${this.name}`);
        console.log(this); // the this keyword actually reffers to thge currebt context
    }
}
// console.log(employee.email);
// employee.getUserData()
// console.log(this); // {}


// construnctor function

function Employee (name, age, email, isWorking) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isWorking = isWorking;
    this.hireEmployee = function(salary){
        console.log(`Is ${this.name} ready to work at @ ₹${salary}/Month`);
    }

    return this;
}
// console.log(Employee())

//Creating instances from the constructor function without using 'new' keyword
const emp1 = Employee("Sam", 27, "sam@microsoft.com", true);
console.log(emp1.email); // sam@microsoft.com

const emp2 = Employee("Rohit", 28, "rohit@google.com", false);
console.log(emp2.email); // rohit@google.com 
console.log(emp1.email); // rohit@google.com - this is happening because we are not using new keyword for creating instances so its acutally modefying the orginial constructer object

const emp3 = new Employee("Hitesh", 29, "hitesh@google.com", true);
console.log(emp3.email); // hitesh@google.com
const emp4 = new Employee("Rahul", 26, "rahul@microsoft.com", true);
console.log(emp4.email); // rahul@microsoft.com
console.log(emp3.email); // hitesh@google.com

emp4.hireEmployee(89000); // Is Rahul ready to work at @ ₹89000/Month

// accessing the constructer function
console.log(emp4.constructor); // [Function: Employee]
console.log(emp4.constructor());
// another method
console.log(emp3 instanceof Employee); // true
console.log(emp1 instanceof Employee); // false - actually emp1 is not instance of Employee as we have not declared it using new keyword
console.log(emp1.constructor); // [Function: Object] - just showing an Object


// Employee {
//     name: undefined,
//     age: undefined,
//     email: undefined,
//     isWorking: undefined,
//     hireEmployee: [Function (anonymous)]
//   }

// The 'new' keyword
// 1. whenever we use new keyword that creates an empty object {}
// 2. then the constructer function being called, which packs all the arguements inside the empty object {}
// 3. if we don't use the new keyword while creating instances from the constructor function, we can not creating any child instances of that constructor function so the prototype of the constructor is not shared with the instance