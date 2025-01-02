import { NestFactory } from '@nestjs/core';
import { AnswersModule } from './answers.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnswersModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'answers_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
