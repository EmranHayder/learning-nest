import { Injectable } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: BookDto[] = [];

    //Add Books
    addBook(book: BookDto): string {
        book.id = uuidv4();
        book.id = book.id.toString();
        this.books.push(book);
        return 'Book added successfully';
    }

    //Find All Books
    findAllBooks(): BookDto[] {
        return this.books;
    }

    //Find Book By Id
    findBookById(id: string): BookDto {
        console.log(typeof id);
        return this.books.find(book => book.id === id);
    }

    //Update Book
    updateBook(book: BookDto): string {
        const index = this.books.findIndex(book => book.id === book.id)
        this.books[index] = book;
        return 'Book updated successfully';
    }

    //Delete Book
    deleteBookById(id: string): string {
        this.books = this.books.filter(book => book.id !== id);
        return 'Book deleted successfully';
    }
}