import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { BookDto } from "../dto/book.dto";
import { validate } from "class-validator";

@Injectable()
export class BookValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const bookClass = plainToInstance(BookDto, value);

        const errors = await validate(bookClass);
        if(errors.length > 0) throw new BadRequestException(errors);

        console.log(value, typeof value);
        return value;
    }
}