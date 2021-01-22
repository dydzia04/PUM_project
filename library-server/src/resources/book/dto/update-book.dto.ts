import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for updating books
 */
export class UpdateBookDto extends PartialType(CreateBookDto) {
  /**
   * Title of book
   */
  @ApiProperty({
    description: 'Title of book',
  })
  title: string;

  /**
   * Author referenced by ID
   */
  @ApiProperty({
    description: 'Author referenced by ID',
  })
  author_id: number;

  /**
   * Publisher referenced by ID
   */
  @ApiProperty({
    description: 'Publisher referenced by ID',
  })
  publisher_id: number;
}
