import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BookDto {
    id: string;

    @ApiProperty({ 
        required: true,
        description: `Enter book title`,
    })
    @IsString()
    title: string;

    @ApiProperty({ 
        required: true,
        description: `Enter book author`, 
    })
    @IsString()
    author: string;

    @ApiProperty({ 
        required: true,
        description: `Enter book published year`, 
    })
    @IsString()
    published: string;
}