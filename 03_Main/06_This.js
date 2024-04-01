// THIS KEYWORD

const user = {
    username: "Alex",
    email: "alex@google.com",
    greetings: function (){
        console.log(`Hello, ${this.username}!`);
        console.log(this); // this refer to this objects current 
    }
}

user.greetings() // Hello, Alex! + { username: 'Alex', email: 'alex@google.com', greetings: [Function: greetings]}
user.username = "Rohit"
user.greetings() // Hello, Rohit! { username: 'Rohit', email: 'alex@google.com', greetings: [Function: greetings]} 
console.log(this) // {} - returnd empty object
