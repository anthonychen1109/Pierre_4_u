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

  static async getBookImgsData(){

  }

  static async getBookImgData(){

  }

  static async getCImagesData(){

  }

  static async getCImageData(){

  }

  static async getUImagesData(){
    const response = await fetch("http://localhost:3000/u_images")
    const data = response.json()
    return data
  }
}
