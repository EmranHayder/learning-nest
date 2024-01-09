import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookService } from "./book.service";
import { BookValidationPipe } from "./pipes/book-validation.pipe";
import { BookGuard } from "./guard/book.guard";

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    //Add Book
    @Post()
    @UseGuards(new BookGuard())
    addBook(@Body(new ValidationPipe()) book: BookDto): string {
        return this.bookService.addBook(book)
    }

    //Find All Books
    @Get()
    findAllBooks(): BookDto[] {
        return this.bookService.findAllBooks();
    }

    //Find Book By Id
    @Get(':id')
    findBookById(@Param('id') id: string): BookDto {
        return this.bookService.findBookById(id);
    }

    //Update Book
    @Put()
    @UseGuards(new BookGuard())
    updateBook(@Body() book: BookDto): string {
        return this.bookService.updateBook(book);
    }

    //Delete Book By Id
    @Delete(':id')
    @UseGuards(new BookGuard())
    deleteBookById(@Param('id') id: string) : string {
        return this.bookService.deleteBookById(id);
    }
}