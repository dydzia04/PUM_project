import { Author } from '../../author/entities/author.entity';
import { Publisher } from '../../publisher/entities/publisher.entity';

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
   * Reference to Author of book
   */
  author: Author;

  /**
   * Reference to Publisher of book
   */
  publisher: Publisher;
}
