import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Firestore } from '@google-cloud/firestore';
import { DatabaseService } from '../../database/database.service';

/**
 * Service for publisher operations passed to controller
 */
@Injectable()
export class PublisherService {
  /**
   * Firestore object reference used to connect to database
   * @private
   */
  private database: Firestore;

  /**
   * Gets connection to database
   * @param dbService
   */
  constructor(private dbService: DatabaseService) {
    this.database = dbService.database;
  }

  /**
   * Method creating new publisher using given parameter
   * @param createPublisherDto
   */
  async create(createPublisherDto: CreatePublisherDto) {
    const publisher = await this.database
      .collection('publishers')
      .add(createPublisherDto);

    return { created: publisher.id };
  }

  /**
   * Method returning all publishers
   */
  async findAll() {
    const publishers = [];
    const snapshot = await this.database.collection('publishers').get();

    if (snapshot.empty) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }

    snapshot.forEach((publisher) => {
      const publisherData = publisher.data();
      publisherData.id = publisher.id;
      publishers.push(publisherData);
    });

    return publishers;
  }

  /**
   * Method returning publisher using given parameter
   * @param id
   */
  async findOne(id: string) {
    const publisher = await this.database
      .collection('publishers')
      .doc(id)
      .get();
    if (!publisher.exists) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }
    return publisher.data();
  }

  /**
   * Method updating publisher using given parameters
   * @param id
   * @param updatePublisherDto
   */
  async update(id: string, updatePublisherDto: UpdatePublisherDto) {
    const publisherRef = this.database.collection('publishers').doc(id);

    const res = await publisherRef.update(updatePublisherDto);

    return { updated: res };
  }

  /**
   * Method deleting publisher using given parameter
   * @param id
   */
  async remove(id: string) {
    const publisher = await this.database
      .collection('publishers')
      .doc(id)
      .get();

    if (publisher.exists) {
      await this.database.collection('publishers').doc(id).delete();
      return { success: 'Removed' };
    } else {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
