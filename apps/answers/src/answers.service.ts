import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './entities/answer.entity';
import { CreateAnswerDto } from './dtos/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepo: Repository<Answer>,
  ) {}

  async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const answer = this.answerRepo.create(createAnswerDto);
    return await this.answerRepo.save(answer);
  }

  async getAnswersByQuestionId(questionId: number): Promise<Answer[]> {
    return await this.answerRepo.find({ where: { questionId } });
  }
}
