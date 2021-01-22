import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for updating authors
 */
export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
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
