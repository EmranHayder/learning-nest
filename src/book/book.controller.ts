import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./dto/book.dto";
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    //Add Book
    @Post()
    addBook(@Body() book: Book): string {
        return this.bookService.addBook(book)
    }

    //Find All Books
    @Get()
    findAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    //Find Book By Id
    @Get(':id')
    findBookById(@Param('id') id: string): Book {
        return this.bookService.findBookById(id);
    }

    //Update Book
    @Put()
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBook(book);
    }

    //Delete Book By Id
    @Delete(':id')
    deleteBookById(@Param('id') id: string) : string {
        return this.bookService.deleteBookById(id);
    }
}