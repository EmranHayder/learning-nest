import { Injectable } from "@nestjs/common";
import { Book } from "./dto/book.dto";

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: Book[] = [];

    //Add Books
    addBook(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return 'Book added successfully';
    }

    //Find All Books
    findAllBooks(): Book[] {
        return this.books;
    }

    //Find Book By Id
    findBookById(id: string): Book {
        return this.books.find(book => book.id === id);
    }

    //Update Book
    updateBook(book: Book): string {
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