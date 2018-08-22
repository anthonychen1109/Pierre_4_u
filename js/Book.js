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
    const bookDiv = document.createElement("div")
    const bookTitle = document.createElement("h1")
    bookTitle.innerText = this.title
    bookDiv.append(bookTitle)
    return bookDiv
  }

}
