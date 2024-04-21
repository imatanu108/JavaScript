// Lets a set of Data is coming from DataAbse as a Array of Objects, now do CRUD operations (creat, read, update & delete)

let users = [
    { id: 1, name: "Alex", email: "alex@google.com" },
    { id: 2, name: "Rohit", email: "rohit@google.com" },
    { id: 3, name: "Rahul", email: "rahul@google.com" },
]

function addUser(userDetails) {
    users.push(userDetails);
}

function getUsers() {
    console.log(users);
}

function getUserById(id) {
    return users.find(user => {
        return user.id === id;
    })
}

function updateUser(id, updatedUserInfo) {
    let userIndex = users.findIndex(user => {
        return user.id === id;
    })
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUserInfo };
    }
}

function deleteUser(id) {
    users = users.filter(user => {
        return user.id !== id;
    })
}

const user4 = { id: 4, name: "Hitesh", email: "hitesh@google.com" }
addUser(user4);
getUsers();
// [
//     { id: 1, name: 'Alex', email: 'alex@google.com' },
//     { id: 2, name: 'Rohit', email: 'rohit@google.com' },
//     { id: 3, name: 'Rahul', email: 'rahul@google.com' },
//     { id: 4, name: 'Hitesh', email: 'hitesh@google.com' } --> added new user
// ]

console.log(getUserById(3)); // { id: 3, name: 'Rahul', email: 'rahul@google.com' }

updateUser(3, { id: 7, role: "Full-Stack Developer" });
getUsers();
// [
//     { id: 1, name: 'Alex', email: 'alex@google.com' },
//     { id: 2, name: 'Rohit', email: 'rohit@google.com' },
//     {
//       id: 7, --> changed from 3 to 7
//       name: 'Rahul',
//       email: 'rahul@google.com',
//       role: 'Full-Stack Developer' --> added new info
//     },
//     { id: 4, name: 'Hitesh', email: 'hitesh@google.com' }
// ]

deleteUser(1);
getUsers();
// [
//     { id: 2, name: 'Rohit', email: 'rohit@google.com' },
//     {
//       id: 7,
//       name: 'Rahul',
//       email: 'rahul@google.com',
//       role: 'Full-Stack Developer'
//     },
//     { id: 4, name: 'Hitesh', email: 'hitesh@google.com' }
// ]