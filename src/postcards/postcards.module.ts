import { Module } from '@nestjs/common';
import { PostcardsService } from './postcards.service';
import { PostcardsController } from './postcards.controller';

@Module({
  controllers: [PostcardsController],
  providers: [PostcardsService],
})
export class PostcardsModule {}
