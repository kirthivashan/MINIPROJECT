import { Component } from '@angular/core';
import { Book } from './MODEL/Book';
import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MINIPROJECT';
  book:Book;
  result:string;
  BookArr:Book[];
  flag:boolean;

  constructor(private service:BookService){
    this.book=new Book();
    this.result="";
    this.BookArr=[];
    this.flag=false;

  }

  insertBook(data:any){
    this.book.id=data.bookId;
    this.book.bookName=data.bookName;
    this.book.bookAuthor=data.bookAuthor;
    this.result=this.service.insertBook(this.book);
}

updateBook(data:any){
  this.book.id=data.bookId;
  this.book.bookName=data.bookName;
  this.book.bookAuthor=data.bookAuthor;
  this.result=this.service.updateBook(this.book);
}

deleteBook(data:any)
{
  this.result=this.service.deleteBook(data.bookId);
}

findBook(data:any){
  this.book=this.service.findBook(data.bookId);
  this.result=this.book.id+" "+this.book.bookName+" "+this.book.bookAuthor;
}

findAllBook(){
  this.BookArr=this.service.findAllBook();
  this.flag=true;
  
}

}
