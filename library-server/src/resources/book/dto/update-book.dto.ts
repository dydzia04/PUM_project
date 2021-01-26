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
   * Description of book
   */
  @ApiProperty({
    description: 'Description of book',
  })
  description: string;

  /**
   * Total number of copies
   */
  @ApiProperty({
    description: 'Total number of copies',
  })
  copies_num: number;

  /**
   * Number of available books
   */
  @ApiProperty({
    description: 'Number of available books',
  })
  stock_num: number;

  /**
   * Release date of book in format yyyy-MM-DD
   */
  @ApiProperty({
    description: 'Release date of book',
  })
  release_date: string;

  /**
   * Author referenced by ID
   */
  @ApiProperty({
    description: 'Author referenced by ID',
  })
  author_id: string;

  /**
   * Publisher referenced by ID
   */
  @ApiProperty({
    description: 'Publisher referenced by ID',
  })
  publisher_id: string;
}
