class UImage {

  constructor(title, imgUrl){
    this.title = title
    this.imgUrl = imgUrl
  }

 //  iAm(){
 //   console.log('a uimage')
 // }

 renderUImage(title, imgUrl) {
   const sideBarUl = document.getElementById("side-bar-ul")
   sideBarUl.innerHTML = ""
   const imageDiv = document.createElement("div")
   const imageTitle = document.createElement("h2")
   const image = document.createElement("img")
   image.classList.add("thumbnail")
   imageTitle.innerText = this.title
   image.src = this.imgUrl
   image.classList.add("quack")
   image.addEventListener("click", (e) => {
     const canvas = document.querySelector("canvas")
     const quack = document.getElementById("quack")
     const canvas1 = canvas.getContext("2d")
     canvas1.drawImage(image, 0, 0, 650, 691)
   })
   imageDiv.append(imageTitle, image)
   sideBarUl.append(imageDiv)
   return imageDiv
  }

  // renderOntoCanvas() {
  //
  // }

}
