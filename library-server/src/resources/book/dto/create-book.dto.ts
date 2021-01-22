import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating books
 */
export class CreateBookDto {
  /**
   * ID of book
   */
  @ApiProperty({
    description: 'ID of book',
  })
  id: number;

  /**
   * Title of book
   */
  @ApiProperty({
    description: 'Title of book',
  })
  title: string;

  /**
   * ID referencing author
   */
  @ApiProperty({
    description: 'ID referencing author',
  })
  author_id: number;

  /**
   * ID referencjing publisher
   */
  @ApiProperty({
    description: 'ID referencjing publisher',
  })
  publisher_id: number;
}
