const donQuixote = new Book("Don Quixote", "Miguel de Cervantes")
const warAndPeace = new Book("War and Peace", "Leo Tolstoy")

const myLibrary = [donQuixote, warAndPeace];

function Book(title, author) {
  this.title = title;
  this.author = author
}

function addBookToLibrary() {

  const newBook = new Book()
  // myLibrary.push(book)
}

function showBooks() {
  let temp = document.getElementsByTagName("template")[0];
  let item = temp.content

  for (const book of myLibrary) {
    let tempCopy = document.importNode(item, true);

    tempCopy.querySelector("h3").innerText = `Title: ${book.title}`
    tempCopy.querySelector("h4").innerText = `Author: ${book.author}`

    document.body.appendChild(tempCopy)

  }
}

const button = document.getElementById("showBooksBtn")
const book = document.getElementById("bookName")

button.addEventListener("click", (event) => {
  // console.log("book");
  showBooks()
})


// console.log(myLibrary)