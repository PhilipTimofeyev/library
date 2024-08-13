
// const myLibrary = [donQuixote, warAndPeace];

class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {

  constructor() {
    this.bookShelf = [donQuixote, warAndPeace]
  }

  addBook(book) {
    console.log(this.bookShelf)
    this.bookShelf.push(book)
  }


  showBooks() {
    let temp = document.getElementsByTagName("template")[0];
    let item = temp.content
    let bookShelf = this.bookShelf


    resetShownBooks()

    for (const book of this.bookShelf) {
      let tempCopy = document.importNode(item, true);
      let removeBookBtn = tempCopy.querySelector(".removeBtn");
      let changeReadBtn = tempCopy.querySelector(".readBtn");

      tempCopy.querySelector(".title").innerText = `${book.title}`;
      tempCopy.querySelector(".author").innerText = `by ${book.author}`;
      tempCopy.querySelector(".pages").innerText = `${book.pages} pages`;
      tempCopy.querySelector(".read").innerText = `${book.read}`;

      changeReadBtn.addEventListener('click', function () {
        toggleRead(book)
        this.parentNode.parentNode.querySelector(".read").innerText = `${book.read}`;
      });

      document.querySelector(".library").appendChild(tempCopy);

      removeBookBtn.addEventListener('click', function () {
        let bookIndex = bookShelf.findIndex((element) => element.title == book.title);
        bookShelf.splice(bookIndex, 1)
        this.parentNode.parentNode.remove()
      });
    }
  }
}


const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 1072, 'Read')
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1296, 'Read')

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary(book) {
//   myLibrary.push(book)
// }

// function showBooks() {
//   let temp = document.getElementsByTagName("template")[0];
//   let item = temp.content

//   resetShownBooks()

//   for (const book of myLibrary) {
//     let tempCopy = document.importNode(item, true);
//     let removeBookBtn = tempCopy.querySelector(".removeBtn");
//     let changeReadBtn = tempCopy.querySelector(".readBtn");

//     tempCopy.querySelector(".title").innerText = `${book.title}`;
//     tempCopy.querySelector(".author").innerText = `by ${book.author}`;
//     tempCopy.querySelector(".pages").innerText = `${book.pages} pages`;
//     tempCopy.querySelector(".read").innerText = `${book.read}`;

//     changeReadBtn.addEventListener('click', function () {
//       toggleRead(book)
//       this.parentNode.parentNode.querySelector(".read").innerText = `${book.read}`;
//     });

//     document.querySelector(".library").appendChild(tempCopy);

//     removeBookBtn.addEventListener('click', function () {
//       bookIndex = myLibrary.findIndex((element) => element.title == book.title);
//       myLibrary.splice(bookIndex, 1)
//       this.parentNode.parentNode.remove()
//     });
//   }
// }

const showBooksBtn = document.getElementById("showBooksBtn")
const removeBookBtn = document.querySelector(`[data-remove="${document.id}"]`)
const myLibrary = new Library

showBooksBtn.addEventListener("click", (event) => {
  myLibrary.showBooks()
})

let addBookBtn = document.querySelector('[data-show-modal]');
let modal = document.querySelector('dialog');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read

addBookBtn.addEventListener('click', function () {
  modal.showModal();
});


modal.addEventListener('close', function (event) {
  if (modal.returnValue === 'cancel') {
    clearForm();
    return;
  } else {
  let read = document.querySelector('input[name="read"]:checked');

  let newBook = new Book(title.value, author.value, pages.value, read.value);

  addBookToLibrary(newBook)
  showBooks()
  clearForm()
  }
});

function clearForm () {
  title.value = "";
  author.value = "";
  pages.value = "";
  resetRadio()
}

function resetRadio() {
  document.querySelector('input[name="read"]').checked = false;
}

function resetShownBooks() {
  document.querySelectorAll(".book").forEach(e => e.remove())
}

function toggleRead(currentBook) {

  if (currentBook.read === 'Read') {
    currentBook.read = 'Not Read' 
  } else {
    currentBook.read = 'Read' 
  }
}