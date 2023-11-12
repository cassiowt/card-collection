import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostcardsModule } from './postcards/postcards.module';

@Module({
  imports: [PostcardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
