import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty({ message: 'Title must not be empty' })
    @IsString({ message: 'Title must be a string' })
    title: string;
    @IsNotEmpty({ message: 'Description must not be empty' })
    @IsString({ message: 'Description must be a string' })
    description?: string;
}