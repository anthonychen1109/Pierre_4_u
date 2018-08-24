


function drawCanvas(){

  const clickX = new Array();
  const clickY = new Array();
  const clickDrag = new Array();

  const canvasDiv = document.getElementById('canvasDiv');
  canvasDiv.innerHTML=""
  canvas = document.createElement('canvas');
  canvas.setAttribute('width', canvas.width);
  canvas.setAttribute('height', canvas.height);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);

  canvas.width = 650;
  canvas.height = 691;


  if(typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  resetBrush()
  canvasMouseEvents()
}

function setBackground(url){
  const canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  const background = new Image();
  background.src = `${url}`;

  background.onload = function(){

    context.drawImage(background,0,0, 650, 650);
  }
}

function resetBrush(){
  const canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  setBrushColor("#000000");
  setLineWidth(5);
  context.lineJoin = "round";
}

function populateSelectBook(){
  const selectMenu = document.querySelector("#book-list")
  fetchBooks().then(books => {
    books.forEach(book => {

    })
  })
}

function setBrushColor(hex){
  const canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  context.strokeStyle = `${hex}`;
}

function setLineWidth(widthInt){
  const canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  context.lineWidth = widthInt;
}

function paintToolsCollapse(){
  const paintbrushBtn = document.getElementById("paintbrushIcon")
  const toolBtns = document.querySelectorAll(".tool-btn")
  const toolTip = document.querySelector(".tool-tip")
  paintbrushBtn.addEventListener("click", () => {
    toolTip.classList.add("hidden")
    toolBtns.forEach(toolBtn => {
      if (toolBtn.classList.contains("hidden")) {
        toolBtn.classList.remove("hidden")
      } else {
        toolBtn.classList.remove("display")
        toolBtn.classList.add("hidden")
      }
    })

  })
}

function canvasMouseEvents(){
  const clickX = new Array();
  const clickY = new Array();
  const clickDrag = new Array();
  const clickColor = new Array();
  const clickSize = new Array();

  function addClick(x, y, dragging){
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
      clickColor.push(context.strokeStyle)
      clickSize.push(context.lineWidth)
  }

  function redraw(){
    // context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    for(var i=0; i < clickX.length; i++) {
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
      }else{
        context.moveTo(clickX[i]-1, clickY[i]);
      }
      context.lineTo(clickX[i], clickY[i]);
      context.closePath();
      setBrushColor(clickColor[i]);
      setLineWidth(clickSize[i]);
      context.stroke();
    }
  }


  let paint;


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
}
