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
