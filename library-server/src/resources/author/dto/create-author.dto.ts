import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating authors
 */
export class CreateAuthorDto {
  /**
   * First name of author
   */
  @ApiProperty({
    description: 'First name of author',
  })
  first_name: string;

  /**
   * Last name of author
   */
  @ApiProperty({
    description: 'Last name of author',
  })
  last_name: string;
}
