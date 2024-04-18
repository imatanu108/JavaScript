function SetUsername(username) {
    // Complex DB calls
    this.username = username
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username) // calling SetUsername constructor function inside CreateUser constructor function
    this.email = email
    this.password = password
}

const user1 = new CreateUser("Alex", "alex@google.com", "1234")
console.log(user1);
// CreateUser {
//     username: 'Alex',
//     email: 'alex@google.com',
//     password: '1234'
//   }

/*********************************************************************
>> Some Very Important cases on calling SetUsername() constructor inside CreateUser() constructor

SetUsername.call(this, username) - why this syntax?
>> .call Method: '.call method passes the current execution context to another function

--> Actually Here if we don't use this syntax we will not get username: "Alex", this property inside CreateUser() constructor.

function CreateUser(username, email, password) {
    SetUsername(username)
} -- why not this syntax

--> Using this syntax, whenever we Invoke the CreateUser function while creating new instances so it goes to call-stack, inside the function it calls the SetUsername() function --> so SetUsername() goes to the call-stack, but after completing it tasks its execution-context also gets out of the call stack with all the variables that has been declared inside this SetUsername(), thats why we don't get access of this.username in CreateUser(): -> actually here this 'this' refer to the 'this' of SetUsername(), but we need to declare the username in the 'this' of CreateUser() constructor.

--> Thats why we used .call method using this syntax -- SetUsername.call(this, username), here the 'this' parameter is passed inside the .call method to set the the this of CreateUser() inside the username variable.

--> .call Method: '.call method passes the current execution context to another function

**********************************************************************/
