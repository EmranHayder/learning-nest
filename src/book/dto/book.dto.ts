import { IsNumber, IsString } from "class-validator";

export class BookDto {
    id: string;

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    published: string;
}