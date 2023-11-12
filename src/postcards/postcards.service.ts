import { Injectable } from '@nestjs/common';
import { CreatePostcardDto } from './dto/create-postcard.dto';
import { UpdatePostcardDto } from './dto/update-postcard.dto';
import { Postcard } from './entities/postcard.entity';
import { v4 as uuidv4 } from 'uuid';

const fs = require('fs');
const path = require('path');

@Injectable()
export class PostcardsService {
  private readonly postcardsPath = path.join(process.cwd(), 'postcards.json');
  create(createPostcardDto: CreatePostcardDto): Postcard {
    const postcards = this.findAll();

    const newPostcard: Postcard = {
      id: uuidv4(), // Use uuid para gerar o ID
      ...createPostcardDto,
    };

    postcards.push(newPostcard);

    fs.writeFileSync(this.postcardsPath, JSON.stringify(postcards, null, 2));

    return newPostcard;
  }

  findAll(): Postcard[] {
    const data = fs.readFileSync(this.postcardsPath, 'utf8');
    return JSON.parse(data);
  }

  findOne(id: number) {
    return `This action returns a #${id} postcard`;
  }

  update(id: number, updatePostcardDto: UpdatePostcardDto) {
    return `This action updates a #${id} postcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} postcard`;
  }
}
