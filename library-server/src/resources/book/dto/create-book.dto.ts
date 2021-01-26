import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating books
 */
export class CreateBookDto {
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
   * ID referencing author
   */
  @ApiProperty({
    description: 'ID referencing author',
  })
  author_id: string;

  /**
   * ID referencjing publisher
   */
  @ApiProperty({
    description: 'ID referencjing publisher',
  })
  publisher_id: string;
}
