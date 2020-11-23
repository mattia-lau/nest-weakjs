```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { WeakModule } from 'nest-weakjs';

@Module({
  imports: [
    WeakModule.forRoot({
      saveToFile: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

```

```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { WeakLoggerService } from 'nest-weakjs';

@Injectable()
export class AppService {
  constructor(private readonly weakLogger: WeakLoggerService) {
    this.weakLogger.log(
      { msg: 'HI', ary: ['asdfasdf', 'asdf'] },
      AppService.name,
    );
  }
}
```

```typescript
//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WEAK_MODULE_NEST_PROVIDER } from 'nest-weakjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WEAK_MODULE_NEST_PROVIDER));
  await app.listen(3000);
}
bootstrap();

```