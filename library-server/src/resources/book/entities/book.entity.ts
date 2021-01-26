import { Author } from '../../author/entities/author.entity';
import { Publisher } from '../../publisher/entities/publisher.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Entity Class for books
 */
export class Book {
  /**
   * ID of book
   */
  id?: number;

  /**
   * Title of book
   */
  title: string;

  /**
   * Description of book
   */
  description: string;

  /**
   * Total number of copies
   */
  copies_num: number;

  /**
   * Number of available books
   */
  stock_num: number;

  /**
   * Release date of book in format yyyy-MM-DD
   */
  @ApiProperty({
    description: 'Release date of book',
  })
  release_date: string;

  /**
   * Reference to Author of book
   */
  author: Author;

  /**
   * Reference to Publisher of book
   */
  publisher: Publisher;
}
