import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dtos/create-question.dto';

@Controller()
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @EventPattern('question_created')
  async createQuestion(createQuestionDto: CreateQuestionDto) {
    return await this.questionsService.createQuestion(createQuestionDto);
  }

  @MessagePattern({ cmd: 'get-all-questions' })
  async getAllQuestions() {
    return await this.questionsService.getAllQuestions();
  }
}
