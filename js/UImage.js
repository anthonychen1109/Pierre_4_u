class UImage {

  constructor(title, imgUrl){
    this.title = title
    this.imgUrl = imgUrl
  }

 //  iAm(){
 //   console.log('a uimage')
 // }

 static renderUImage(title, imgUrl, liClass) {
   let cat = liClass || "cat-book"
   const sideBarUl = document.getElementById("side-bar-ul")
   const divRender = document.querySelector(`.${cat}`)
   const imageDiv = document.createElement("div")
   const imageTitle = document.createElement("h4")
   const image = document.createElement("img")
   image.classList.add("thumbnail")
   imageTitle.innerText = title
   image.src = imgUrl
   image.classList.add("quack")
   image.addEventListener("click", (e) => {
     // const canvas = document.querySelector("canvas")
     // const quack = document.getElementById("quack")
     // const canvas1 = canvas.getContext("2d")
     // canvas1.drawImage(image, 0, 0, 650, 691)
     drawCanvas()
     setBackground(`${imgUrl}`)
   })
   imageDiv.append(imageTitle, image)
   // sideBarUl.append(imageDiv)
   divRender.append(imageDiv)
   // return imageDiv
  }

  static renderFromImageData(imgObj, type) {
    UImage.renderUImage(imgObj.title, imgObj.imgUrl, type)
  }

}
