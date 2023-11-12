import { Test, TestingModule } from '@nestjs/testing';
import { PostcardsController } from './postcards.controller';
import { PostcardsService } from './postcards.service';

describe('PostcardsController', () => {
  let controller: PostcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostcardsController],
      providers: [PostcardsService],
    }).compile();

    controller = module.get<PostcardsController>(PostcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
