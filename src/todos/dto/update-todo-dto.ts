import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
