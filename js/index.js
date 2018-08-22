document.addEventListener("DOMContentLoaded", () => {

  const books = Adapter.getBooksData()
    .then(books => renderBooks(books))
})

function renderBooks(books) {
  const mainDiv = document.getElementById("main")
  books.forEach(book => {
    const newBook = new Book(book.title, book.userId)
    const myBook = newBook.render()
    mainDiv.append(myBook)
  })
}
