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
