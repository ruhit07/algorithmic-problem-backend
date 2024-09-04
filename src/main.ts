import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap Logger');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      skipUndefinedProperties: true,
    }),
  );

  logger.log(`Application listening on port 4000 in development mode.`);
  await app.listen(4000);
}
bootstrap();
