class Book{

  constructor(title, userId){
    this.title = title;
    this.userId = userId;
    this.books = []
  }

  iAm(){
   console.log('a book')
  }

  render() {
    const title = document.getElementById("title")
    const bookDiv = document.createElement("div")
    const bookTitle = document.createElement("h3")
    bookTitle.innerText = this.title
    bookTitle.classList.add('bookTitle')

    // event listener to display images associated with book
    bookTitle.addEventListener("click", (e) => {
      let id = e.target.parentElement.getAttribute("data-id")
      Adapter.getBookData(id)
        .then( r => renderBookImages(r.id) )
    })

    bookDiv.append(bookTitle)
    title.append(bookDiv)
    return bookDiv
  }

  renderBookImages(id) {
    console.log(id);
    // Adapter.getBookData(id).then(console.log)
  }

}
