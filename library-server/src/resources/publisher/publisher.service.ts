import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';

/**
 * Service for publisher operations passed to controller
 */
@Injectable()
export class PublisherService {
  /**
   * Method creating new publisher using given parameter
   * @param createPublisherDto
   */
  create(createPublisherDto: CreatePublisherDto) {
    return 'This action adds a new publisher';
  }

  /**
   * Method returning all publishers
   */
  findAll() {
    return `This action returns all publisher`;
  }

  /**
   * Method returning publisher using given parameter
   * @param id
   */
  findOne(id: number) {
    return `This action returns a #${id} publisher`;
  }

  /**
   * Method updating publisher using given parameters
   * @param id
   * @param updatePublisherDto
   */
  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return `This action updates a #${id} publisher`;
  }

  /**
   * Method deleting publisher using given parameter
   * @param id
   */
  remove(id: number) {
    return `This action removes a #${id} publisher`;
  }
}
