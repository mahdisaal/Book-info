
//the following serves only as data sample, you can use different books or more than 3
class Book {
  constructor(title,author,genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
  displayBookInfo(){
    var title_line = "<strong> Title: </strong>" + this.title + "<br>\n";
    var author_line = "<strong> Author: </strong>" + this.author + "<br>\n";
    var genre_line = "<strong> Genre: </strong>" + this.genre + "<hr>\n";
    return (title_line + author_line + genre_line);
  }
}

 function addBook() {
 let title = prompt ('please, enter the title:');
 let author = prompt ('please, enter the author:');
 let genre = prompt ('please, enter the genre:');
 return new Book(title, author, genre);
}

var bookArray = [];
for (let b = 0; b < 3; b++) bookArray.push(addBook());
while (true){
  let z = addBook();
  bookArray.push(z);
  var quit = prompt('Please enter Q to stop entering your books');
  if (quit ==='Q')
  break;
}
let a = bookArray.length;
document.write("Your books summary are " + a + " books, please see details below:" + "<hr>\n" );
for (let book of bookArray){
    document.write(book.displayBookInfo());
}

