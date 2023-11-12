import { Test, TestingModule } from '@nestjs/testing';
import { PostcardsService } from './postcards.service';

describe('PostcardsService', () => {
  let service: PostcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostcardsService],
    }).compile();

    service = module.get<PostcardsService>(PostcardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
