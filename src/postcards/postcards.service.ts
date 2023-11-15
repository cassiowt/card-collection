import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: string): Postcard {
    const postcards = this.findAll();
    const postcard = postcards.find((p) => p.id === id);

    if (!postcard) {
      throw new NotFoundException(`Postcard with ID ${id} not found`);
    }

    return postcard;
  }

  update(id: string, updatePostcardDto: UpdatePostcardDto): Postcard {
    const postcards = this.findAll();
    const index = postcards.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Postcard with ID ${id} not found`);
    }

    const updatedPostcard: Postcard = {
      id,
      ...updatePostcardDto,
    };

    postcards[index] = updatedPostcard;

    fs.writeFileSync(this.postcardsPath, JSON.stringify(postcards, null, 2));

    return updatedPostcard;
  }

  remove(id: string): Postcard {
    const postcards = this.findAll();
    const index = postcards.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Postcard with ID ${id} not found`);
    }

    const removedPostcard = postcards.splice(index, 1)[0];

    fs.writeFileSync(this.postcardsPath, JSON.stringify(postcards, null, 2));

    return removedPostcard;
  }
}
