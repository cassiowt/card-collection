import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostcardsService } from './postcards.service';
import { CreatePostcardDto } from './dto/create-postcard.dto';
import { UpdatePostcardDto } from './dto/update-postcard.dto';
import { Postcard } from './entities/postcard.entity';

@Controller('postcards')
export class PostcardsController {
  constructor(private readonly postcardsService: PostcardsService) {}

  @Post()
  create(@Body() createPostcardDto: CreatePostcardDto): Postcard {
    return this.postcardsService.create(createPostcardDto);
  }

  @Get()
  findAll(): Postcard[] {
    return this.postcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postcardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostcardDto: UpdatePostcardDto,
  ) {
    return this.postcardsService.update(id, updatePostcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postcardsService.remove(id);
  }
}
