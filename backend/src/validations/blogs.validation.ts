import { IsDate, IsNumber, IsString } from "class-validator";

export class BlogsDto{
    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsString()
    content!: string;

    @IsDate()
    createdAt!: Date;

    @IsNumber()
    userId!: number;
}

export class EditBlogsDto{
    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsString()
    content!: string;
}