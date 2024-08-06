import { Injectable } from '@angular/core';
import { Book } from './MODEL/Book';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string;
  book:Book;
  BookArr:Book[];

  constructor(private http:HttpClient) { 
    this.book=new Book();
    this.url="http://localhost:3004/bo0ks";
    this.BookArr=[];
  }

  insertBook(book : Book)
  {
      this.http.post<Book>(this.url,book).subscribe();
      return "Data inserted successfully";
  }

  updateBook(book : Book)
  {
      this.http.put<Book>(this.url+"/"+book.id,book).subscribe();
      return "Data updated successfully";
  }

  deleteBook(bookId:number)
  {
    this.http.delete<Book>(this.url+"/"+bookId).subscribe();
    return "Data deleted successfully";
  }

  findBook(bookId:number){
    this.http.get<Book>(this.url+"/"+bookId).subscribe(data=>this.book=data);
    return this.book;
  }

  findAllBook(){
    this.http.get<Book[]>(this.url).subscribe(data=>this.BookArr=data);
    return this.BookArr;
  }
}
