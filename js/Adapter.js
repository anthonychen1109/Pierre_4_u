class Adapter{

  static async getBooksData(){
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json()
    return data
  }

  static async getBookData(){

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
  }
}
