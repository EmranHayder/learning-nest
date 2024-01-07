import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { BookLoggerMiddleware } from "./middleware/book-logger.middleware";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookLoggerMiddleware).forRoutes('book');
    }
}