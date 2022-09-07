const requestURL = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(requestURL) /** DONT FORGET RETURN!!!! */
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach((book) => {
    const p = document.createElement('p')
    p.innerText = book.name
    main.appendChild(p)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})

