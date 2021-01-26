import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating publishers
 */
export class CreatePublisherDto {
  /**
   * Name of publisher
   */
  @ApiProperty({
    description: 'Name of publisher',
  })
  name: string;
}
