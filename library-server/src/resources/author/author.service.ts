import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Firestore } from '@google-cloud/firestore';
import { DatabaseService } from '../../database/database.service';

/**
 * Service for authors operations passed to controller
 */
@Injectable()
export class AuthorService {
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
   * Method creating new author using given parameter
   * @param createAuthorDto
   */
  async create(createAuthorDto: CreateAuthorDto) {
    const author = await this.database
      .collection('authors')
      .add(createAuthorDto);

    return { created: author.id };
  }

  /**
   * Method finding all authors
   */
  async findAll() {
    const authors = [];
    const snapshot = await this.database.collection('authors').get();

    if (snapshot.empty) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }

    snapshot.forEach((author) => {
      const authorData = author.data();
      authorData.id = author.id;
      authors.push(authorData);
    });

    return authors;
  }

  /**
   * Method finding author by given parameter
   * @param id
   */
  async findOne(id: string) {
    const author = await this.database.collection('authors').doc(id).get();
    if (!author.exists) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }
    return author.data();
  }

  /**
   * Method updating author using given parameters
   * @param id
   * @param updateAuthorDto
   */
  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const authorRef = this.database.collection('authors').doc(id);

    const res = await authorRef.update(updateAuthorDto);

    return { updated: res };
  }

  /**
   * Method deleting author using given parameter
   * @param id
   */
  async remove(id: string) {
    const author = await this.database.collection('authors').doc(id).get();

    if (author.exists) {
      await this.database.collection('authors').doc(id).delete();
      return { success: 'Removed' };
    } else {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
