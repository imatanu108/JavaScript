// Filter for Arrays

const myNumbers = [1, 2, 3, 4, 5 ]

const myNums = myNumbers.filter( (value) => {
    return value < 4;
})
console.log(myNums); // [ 1, 2, 3 ]

const restNums = myNumbers.filter( (value) => value >= 4);

console.log(restNums); // [ 4, 5 ]

// doing this same thing using an for each loop

const newNums = []

myNumbers.forEach(value => {
    if (value < 4) {
        newNums.push(value);
    }
});

console.log(newNums); // [ 1, 2, 3 ]

let bookList = [
    {name: "Book 1", genre: "Science", publishYear: 1996, currentEdition: 2020},
    {name: "Book 2", genre: "History", publishYear: 2004, currentEdition: 2022},
    {name: "Book 3", genre: "Lifestyle", publishYear: 2003, currentEdition: 2021},
    {name: "Book 4", genre: "History", publishYear: 1999, currentEdition: 2019},
    {name: "Book 5", genre: "Lifestyle", publishYear: 1997, currentEdition: 2023},
    {name: "Book 6", genre: "History", publishYear: 2002, currentEdition: 2024},
    {name: "Book 7", genre: "Science", publishYear: 2007, currentEdition: 2023},
    {name: "Book 8", genre: "Lifestyle", publishYear: 2012, currentEdition: 2019},
    {name: "Book 9", genre: "History", publishYear: 2013, currentEdition: 2020},
    {name: "Book 10", genre: "Science", publishYear: 1996, currentEdition: 2020},
    {name: "Book 11", genre: "Lifestyle", publishYear: 1999, currentEdition: 2018},
    {name: "Book 12", genre: "Science", publishYear: 2002, currentEdition: 2022}
]

// select some books with, genre: Lifestyle, published after 2000 or current edition was published after 2020
const selectedBooks = bookList.filter((book) => {
    return book.genre === "Lifestyle" && (book.publishYear >= 2000 || book.currentEdition >= 2020);
})

console.log(selectedBooks); // book 3, book 5, book 8