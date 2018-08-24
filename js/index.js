document.addEventListener('DOMContentLoaded', init)

function init(){


  drawCanvas()
  setBackground("./assets/images/download.png")
  resetBrush()
  renderBooks()
  renderCategories()
  createNewBook()
  paintToolsCollapse()
}

// function putImage(){
//   var canvas1 = document.getElementById("canvas");
//   const img = document.createElement("img")
//
//   console.log("img return", canvas.toDataURL());
//   // document.append(img)
// }


function fetchBooks() {
  const books = Adapter.getBooksData()
  return books
}

// RENDER BOOKS ONTO PAGE
function renderBooks() {
  // Grab main div
  fetchBooks().then(books => {
    const mainDiv = document.getElementById("side-bar")
    mainDiv.innerHTML=""
    // iterate through books promise and create new book instances
    books.forEach(book => {

      // instantiate new book object
      const newBook = new Book(book.attributes.title, book.relationships.user.data.id)
      const myBook = newBook.render()
      myBook.dataset.id = book.id

      // append book instances to page
      mainDiv.append(myBook)
    })
  })
}

function renderCategories() {
  const allLi = document.getElementById("categories").querySelectorAll(".cat-li")
  allLi.forEach(li => li.addEventListener("click", () => {
    const type = li.id
    const catDivs = document.querySelectorAll(`.cat-div`)
    catDivs.forEach(catDiv => catDiv.innerHTML = "")
    Adapter.getUImagesData().then(uImages => {
      uImages.forEach(uImage => {
        const newUImage = new UImage(uImage.title, uImage.imgURL)
        if (type == uImage.category) {
          UImage.renderFromImageData(newUImage, type)
        }
      })
    })
  }))
}

function createNewBook() {
  const createButton = document.getElementById("createBook")
  const newBookForm = document.querySelector(".bookForm")
  createButton.addEventListener("click", () => {
    newBookForm.innerHTML = ""
    // CAN BE BROKEN OUT INTO ANOTHER FUNCTION, IN THE TIME BEING... WE'LL MAKE SURE IT WORKS IN HERE FIRST

    const titleInput = document.createElement("input")
    titleInput.placeholder = "Book Title:"
    const submitButton = document.createElement("button")
    submitButton.innerText = "Submit"
    submitButton.classList.add("btn")
    submitButton.classList.add("btn-success")
    newBookForm.append(titleInput, submitButton)
    newBookForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const bookObj = {
        title: titleInput.value,
        user_id: 1
      }
      Adapter.postBook(bookObj).then(() => renderBooks())
      titleInput.value = ""
    })
  })
}
