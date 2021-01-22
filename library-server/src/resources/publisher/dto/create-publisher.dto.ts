import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating publishers
 */
export class CreatePublisherDto {
  /**
   * ID of publisher
   */
  @ApiProperty({
    description: 'ID of publisher',
  })
  id: number;

  /**
   * Name of publisher
   */
  @ApiProperty({
    description: 'Name of publisher',
  })
  name: string;
}
