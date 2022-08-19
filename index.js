const requestURL = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(requestURL)  /** DONT FORGET RETURN!!!! */
.then(resp => resp.json())
.then(json => renderBooks(json))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
