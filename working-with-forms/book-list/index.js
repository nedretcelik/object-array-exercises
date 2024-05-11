"use strict";

// Display a list of books.
// Allow the user to click on a book to see its details.

let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
  { id: 3, title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
];

window.onload = function () {
  const bookList = document.getElementById("bookList");

  bookListOptions();
  bookList.onchange = displaySelectedBook;
};

function bookListOptions() {
  const bookList = document.getElementById("bookList");
  for (const book of books) {
    let bookOption = new Option(book);

    bookOption.textContent = book.title;
    bookOption.value = book.id;

    bookList.appendChild(bookOption);
  }
}

function displaySelectedBook(parameter) {
  const selectedBook = document.getElementById("selectedBook");

  selectedBook.innerText = parameter.target.selectedOptions[0].text;
}
