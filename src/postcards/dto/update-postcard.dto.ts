import { PartialType } from '@nestjs/mapped-types';
import { CreatePostcardDto } from './create-postcard.dto';

export class UpdatePostcardDto extends PartialType(CreatePostcardDto) {}
