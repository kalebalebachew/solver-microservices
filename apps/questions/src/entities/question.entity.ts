import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Answer } from '../../../answers/src/entities/answer.entity'; // Ensure this path is correct

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
