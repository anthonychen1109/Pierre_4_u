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

    const bookTitle = document.createElement("h1")

    bookTitle.innerText = this.title
    bookTitle.addEventListener("click", (e) => {
      // console.log(e.target.parentElement.getAttribute("data-id"));
      let id = e.target.parentElement.getAttribute("data-id")
      Adapter.getBookData(id).then(
        r => console.log(r)
      )
    })
    bookDiv.append(bookTitle)
    title.append(bookDiv)
    return bookDiv
  }

}
