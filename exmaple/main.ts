import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WEAK_MODULE_NEST_PROVIDER } from 'nest-weakjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WEAK_MODULE_NEST_PROVIDER));
  await app.listen(3000);
}
bootstrap();
