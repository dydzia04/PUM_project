import { PartialType } from '@nestjs/mapped-types';
import { CreatePublisherDto } from './create-publisher.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object for updating publishers
 */
export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {
  /**
   * Name of publisher
   */
  @ApiProperty({
    description: 'Name of publisher',
  })
  name: string;
}
