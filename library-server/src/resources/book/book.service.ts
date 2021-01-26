import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Firestore } from '@google-cloud/firestore';
import { DatabaseService } from '../../database/database.service';

/**
 * Service for book operations passed to controller
 */
@Injectable()
export class BookService {
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
   * Method creating new book using given parameter
   * @param createBookDto
   */
  async create(createBookDto: CreateBookDto) {
    const book = await this.database.collection('books').add(createBookDto);

    return { created: book.id };
  }

  /**
   * Method returning all books
   */
  async findAll() {
    const books = [];
    const snapshot = await this.database.collection('books').get();

    if (snapshot.empty) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }

    snapshot.forEach((book) => {
      const bookData = book.data();
      bookData.id = book.id;
      books.push(bookData);
    });

    return books;
  }

  /**
   * Method returning book using given parameter
   * @param id
   */
  async findOne(id: string) {
    const book = await this.database.collection('books').doc(id).get();
    if (!book.exists) {
      throw new HttpException('No Data', HttpStatus.NO_CONTENT);
    }
    return book.data();
  }

  /**
   * Method updating book using given parameters
   * @param id
   * @param updateBookDto
   */
  async update(id: string, updateBookDto: UpdateBookDto) {
    const bookRef = this.database.collection('books').doc(id);

    const res = await bookRef.update(updateBookDto);

    return { updated: res };
  }

  /**
   * Method deleting book using given parameter
   * @param id
   */
  async remove(id: string) {
    const book = await this.database.collection('books').doc(id).get();

    if (book.exists) {
      await this.database.collection('books').doc(id).delete();
      return { success: 'Removed' };
    } else {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
