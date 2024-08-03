const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 1072, 'Yes')
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1296, 'Yes')

const myLibrary = [donQuixote, warAndPeace];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function showBooks() {
  let temp = document.getElementsByTagName("template")[0];
  let item = temp.content

  resetShownBooks()

  for (const book of myLibrary) {
    let tempCopy = document.importNode(item, true);
    let removeBookBtn = tempCopy.querySelector(".removeBtn");

    tempCopy.querySelector(".title").innerText = `Title: ${book.title}`;
    tempCopy.querySelector(".author").innerText = `Author: ${book.author}`;
    tempCopy.querySelector(".pages").innerText = `Pages: ${book.pages}`;
    tempCopy.querySelector(".read").innerText = `Read: ${book.read}`;

    document.body.appendChild(tempCopy);

    removeBookBtn.addEventListener('click', function () {
      bookIndex = myLibrary.findIndex((element) => element.title == book.title);
      myLibrary.splice(bookIndex, 1)
      this.parentNode.remove()
    });
  }
}

const showBooksBtn = document.getElementById("showBooksBtn")
const removeBookBtn = document.querySelector(`[data-remove="${document.id}"]`)

showBooksBtn.addEventListener("click", (event) => {
  showBooks()
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