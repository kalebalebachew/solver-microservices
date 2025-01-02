import { NestFactory } from '@nestjs/core';
import { QuestionsModule } from './questions.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    QuestionsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'questions_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();

