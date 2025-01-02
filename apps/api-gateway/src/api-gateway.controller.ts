import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/create-question.dto';

@Controller('/questions')
export class ApiGatewayController {
  constructor(
    @Inject('QUESTIONS_SERVICE') private readonly questionsClient: ClientProxy,
    @Inject('ANSWERS_SERVICE') private readonly answersClient: ClientProxy,
  ) {}

  @Post()
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsClient.emit('question_created', createQuestionDto);
  }

  @Get()
  async getQuestions() {
    return this.questionsClient.send({ cmd: 'get-all-questions' }, {});
  }

  @Post('/:questionId/answers')
  async createAnswer(
    @Param('questionId') questionId: number,
    @Body() createAnswerDto: any,
  ) {
    createAnswerDto.questionId = questionId;
    return this.answersClient.emit('answer_created', createAnswerDto);
  }

  @Get('/:questionId/answers')
  async getAnswers(@Param('questionId') questionId: number) {
    return this.answersClient.send({ cmd: 'get-all-answers' }, { questionId });
  }
}
