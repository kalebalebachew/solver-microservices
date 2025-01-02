import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  questionId: number;
}
