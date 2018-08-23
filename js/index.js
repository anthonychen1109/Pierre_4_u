document.addEventListener('DOMContentLoaded', init)

function init(){

  context = document.getElementById('canvas').getContext("2d");

  $('#canvas').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
  });

  $('#canvas').mouseup(function(e){
    paint = false;
  });

  $('#canvas').mouseleave(function(e){
    paint = false;
  });

  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();
  var paint;

  function addClick(x, y, dragging)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for(var i=0; i < clickX.length; i++) {
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
    }
  }

  fetchBooks()
}

// FETCH BOOKS
function fetchBooks() {
  const books = Adapter.getBooksData()
    .then(books => renderBooks(books))
}

// RENDER BOOKS ONTO PAGE
function renderBooks(books) {
  // Grab main div
  const mainDiv = document.getElementById("side-bar")

  // iterate through books promise and create new book instances
  books.forEach(book => {

    // instantiate new book object
    const newBook = new Book(book.attributes.title, book.relationships.user.data.id)
    const myBook = newBook.render()
    myBook.dataset.id = book.id

    // append book instances to page
    mainDiv.append(myBook)
  })
}
