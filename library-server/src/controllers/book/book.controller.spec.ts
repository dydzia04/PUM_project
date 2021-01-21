import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookModel } from '../../models/book.model';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a value', () => {
    expect(controller.getBooks()).toReturn();
  });

  it('should return list of books', () => {
    expect(controller.getBooks()).toBe(Array(BookModel));
  });

  it('should return a value', () => {
    expect(controller.getBook(1)).toReturn();
  });

  it('should return a book', () => {
    expect(controller.getBook(1)).toBe(BookModel);
  });

  it('should create a book', () => {
    expect(controller.addBook(new BookModel())).toReturn();
  });

  it('should return a book', () => {
    expect(controller.addBook(new BookModel())).toBe(BookModel);
  });
});
