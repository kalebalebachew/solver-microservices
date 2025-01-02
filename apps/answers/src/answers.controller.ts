import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dtos/create-answer.dto';

@Controller()
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @EventPattern('answer_created')
  async createAnswer(createAnswerDto: CreateAnswerDto) {
    return await this.answersService.createAnswer(createAnswerDto);
  }

  @MessagePattern({ cmd: 'get-all-answers' })
  async getAnswersByQuestionId(data: { questionId: number }) {
    return await this.answersService.getAnswersByQuestionId(data.questionId);
  }
}
