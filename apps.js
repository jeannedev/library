const myLibrary = ['Harry Potter', 'Percy Jackson', 'Six of Crows'];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
};

document.querySelector('.add-book-button').addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
});


