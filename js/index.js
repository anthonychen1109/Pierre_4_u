document.addEventListener('DOMContentLoaded', init)

function init(){

  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();
  var paint;

  var canvasDiv = document.getElementById('canvasDiv');
  canvas = document.createElement('canvas');
  canvas.setAttribute('width', canvas.width);
  canvas.setAttribute('height', canvas.height);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);

  canvas.width = 650;
  canvas.height = 691;


  var background = new Image();
  background.src = "http://t8ls.com/wp-content/uploads/2017/05/stylist-design-goat-animal-coloring-pages-sheet.jpg";



  if(typeof G_vmlCanvasManager != 'undefined') {
  	canvas = G_vmlCanvasManager.initElement(canvas);
  }
  context = canvas.getContext("2d");

  background.onload = function(){
    context.drawImage(background,0,0);
  }

  function addClick(x, y, dragging)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function redraw(){
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

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


  $('#canvas').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

     paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
  });

  $('#canvas').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });

  $('#canvas').mouseup(function(e){
    paint = false;
  });

  $('#canvas').mouseleave(function(e){
    paint = false;
  });


  // fetchBooks()
}

function putImage(){
  var canvas1 = document.getElementById("canvas");
  const img = document.createElement("img")
  img.crossOrigin="anonymous"
  img.src = canvas.toDataURL("image/png");
  document.append(img)
}

// FETCH
function fetchBooks() {
  const books = Adapter.getBooksData()
    .then(books => renderBooks(books))
}

function renderBooks(books) {
  const mainDiv = document.getElementById("main")
  books.forEach(book => {
    const newBook = new Book(book.title, book.userId)
    const myBook = newBook.render()
    mainDiv.append(myBook)
  })
}
