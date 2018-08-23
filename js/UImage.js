class UImage {

  constructor(title, imgUrl){
    this.title = title
    this.imgUrl = imgUrl
  }

 //  iAm(){
 //   console.log('a uimage')
 // }

 static renderUImage(title, imgUrl) {
   console.log("from render", title, imgUrl)
   const sideBarUl = document.getElementById("side-bar-ul")
   // sideBarUl.innerHTML = ""
   const imageDiv = document.createElement("div")
   const imageTitle = document.createElement("h2")
   const image = document.createElement("img")
   image.classList.add("thumbnail")
   imageTitle.innerText = title
   image.src = imgUrl
   image.classList.add("quack")
   image.addEventListener("click", (e) => {
     const canvas = document.querySelector("canvas")
     const quack = document.getElementById("quack")
     const canvas1 = canvas.getContext("2d")
     canvas1.drawImage(image, 0, 0, 650, 691)
   })
   imageDiv.append(imageTitle, image)
   sideBarUl.append(imageDiv)
   // return imageDiv
  }

// UImage {title: "wildebeast", imgUrl: "https://us.123rf.com/450wm/jemastock/jemastock1707…can-wildlife-animal-vector-illustration.jpg?ver=6"}
  static renderFromImageData(imgObj) {
    UImage.renderUImage(imgObj.title, imgObj.imgUrl)
  }

}
