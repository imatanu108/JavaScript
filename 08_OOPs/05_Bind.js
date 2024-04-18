// In JavaScript the bind() method is used to create a new function with a specific 'this' value. It allow us to set the context of a function explicitly

const person = {
    name: 'Alex',
    greet: function (){
        console.log(`Hello, ${this.name}!`)
    }
};

const greetFunc = person.greet;
greetFunc(); // Hello, undefined! - the greetFunc() doesn't have the access to this.name thats why the name is undefined 

// to avoid this particular problem we need to give the access of this.name of person to the newly created function, here we can use the bind() method to specify the 'this' of person to the newly created object

const boundGreetFunc = person.greet.bind(person);
boundGreetFunc(); // Hello, Alex! - accessing the this of person to get the value of this.name
