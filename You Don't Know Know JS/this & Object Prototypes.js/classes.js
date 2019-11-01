class Book {
Constructor(title, pages , isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn; 
}
printIsbn(){
console.log(this.isbn) 
}

}

let book = new Book('YDKSJ', "200", "#dgdyeyeg");
console.log(book)



/* inheritance
  as we have a new array of declaring classes, there is also simplifed 
  synatx to use inheritance between classes.
  */ 
class ITbook extends Book {
constructor(title, pages, isbn, technology) {
  super(title,pages, isbn)
  this.technology = technology; 
}
  printIsbn(){
console.log(this.isbn)
  }
}
let JsBook = new ITbook("YDKJS", "200","#272772","Javscript")
 console.log(JsBook.title)

/* we can extend another class and inheritits behaviour using the 
  keyword extends. inside the constructor we  refer to the constructor's superclass
 using the word super() */
