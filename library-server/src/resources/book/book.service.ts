import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

/**
 * Service for book operations passed to controller
 */
@Injectable()
export class BookService {
  /**
   * Method creating new book using given parameter
   * @param createBookDto
   */
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  /**
   * Method returning all books
   */
  findAll() {
    return `This action returns all book`;
  }

  /**
   * Method returning book using given parameter
   * @param id
   */
  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  /**
   * Method updating book using given parameters
   * @param id
   * @param updateBookDto
   */
  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  /**
   * Method deleting book using given parameter
   * @param id
   */
  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
