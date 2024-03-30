// Using Object constructor to create an object

const Employee = new Object() // works similar to "const Employee = {}"
Employee.name = "Ben"
Employee.age = 25
Employee.role = "Software Developer"
Employee.company = "Microsoft"
Employee.email = "ben@microsoft.com"

console.log(Employee);
// { name: 'Ben', age: 25, role: 'Software Developer', company: 'Microsoft', email: 'ben@microsoft.com'}

console.log(Object.keys(Employee)) // [ 'name', 'age', 'role', 'company', 'email' ]
console.log(Object.values(Employee)) // [ 'Ben', 25, 'Software Developer', 'Microsoft', 'ben@microsoft.com' ]

console.log(Object.entries(Employee)) // returns array of all key, value pairs, those are also array
// [[ 'name', 'Ben' ],[ 'age', 25 ],[ 'role', 'Software Developer' ],[ 'company', 'Microsoft' ],[ 'email', 'ben@microsoft.com' ]]

// checking if any property exists in the Object
console.log(Employee.hasOwnProperty("role")); // true

// Nested Object
const newEmployee = {
    email: "rahul@microsoft.com",
    name: {
        username: "rahul1234",
        fullname: {
            firstName: "Rahul",
            lastName: "Sharma"
        }
    },
    age: 26
}

console.log(newEmployee.name); // { username: 'rahul1234', fullname: { firstName: 'Rahul', lastName: 'Sharma' }}
console.log(newEmployee.name.username); // rahul1234
console.log(newEmployee.name.fullname); // { firstName: 'Rahul', lastName: 'Sharma' }
console.log(newEmployee.name.fullname.lastName); // Sharma

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } - wrong way to assign an object

const obj4 = Object.assign({}, obj1, obj2) // here target {empty object}, and sources are obj1 and obj2. In this way all the methods of obj1 and obj2 will be assigned to the empty object
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// using spread Operator
const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// ARRAY OF OBJECTS

const users = [
    {
        id: "user1",
        email: "user1@gmail.com"
    },
    {
        id: "user2",
        email: "user2@gmail.com"
    },
    {
        id: "user3",
        email: "user3@gmail.com"
    }
]

console.log(users[0].email) // user1@gmail.com
console.log(Object.keys(users[1])) // [ 'id', 'email' ] - returns an array of keys
console.log(Object.values(users[1])) // [ 'user2', 'user2@gmail.com' ] - returns an array of values
