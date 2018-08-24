class Adapter{

  static async getBooksData(){
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json()
    return data.data
  }

  static async getBookData(id){
    const response = await fetch(`http://localhost:3000/books/${id}`)
    const data = response.json().then(r => r.data)
    // console.log(data);
    return data
  }

  static async postBook(newBookObj) {
    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newBookObj)
    })
    console.log(response);
    return response.json()
  }

  static async getBookImgsData(){

  }

  static async getBookImgData(){

  }

  static async getCImagesData(){

  }

  static async getCImageData(){

  }

  static async postBookImage(bookImage) {
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(bookImage)
    })
    return response.json()
  }

  static async getUImagesData(){
    const response = await fetch("http://localhost:3000/u_images")
    const data = response.json()
    return data
  }

  static async postCImage(imgObj){
    const response = await fetch("http://localhost:3000/c_images", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(imgObj)
    })
  }
}
