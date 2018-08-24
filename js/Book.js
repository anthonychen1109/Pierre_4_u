class Book {

  constructor(title, userId){
    this.title = title;
    this.userId = userId;
    this.books = []
  }

  // iAm(){
  //  console.log('a book')
  // }

  render() {
    const title = document.getElementById("title")
    const bookDiv = document.createElement("div")
    const bookTitle = document.createElement("h3")
    bookTitle.innerText = this.title
    bookTitle.classList.add('bookTitle')
    const bookImages = document.createElement("div")
    bookImages.classList.add("cat-book")
    // event listener to display images associated with book
    bookTitle.addEventListener("click", (e) => {
      let id = e.target.parentElement.getAttribute("data-id")
      bookImages.innerHTML = ""
      Adapter.getBookData(id)
        .then( r => this.renderBookImages(r.id) )
      const addImage = document.createElement("form")

    })

    bookDiv.append(bookTitle, bookImages)
    title.append(bookDiv)
    return bookDiv
  }

  // render book thumbnails under titles
  renderBookImages(id) {
    Adapter.getBookData(id)
      .then(data => {
        // const newUImage = new UImage(
        //   data["relationships"]["u-images"]["data"][0]["title"],
        //   data["relationships"]["u-images"]["data"][0]["img-url"])
        UImage.renderUImage(data["relationships"]["u-images"]["data"][0]["title"],
        data["relationships"]["u-images"]["data"][0]["img-url"])
        }
      )
  }

}
