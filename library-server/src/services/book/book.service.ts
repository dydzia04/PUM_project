import { Injectable } from '@nestjs/common';
import { BookModel } from '../../models/book.model';
import { AuthorService } from '../author/author.service';
import { PublisherService } from '../publisher/publisher.service';

@Injectable()
export class BookService {
  constructor(
    private authorService: AuthorService,
    private publisherService: PublisherService,
  ) {}

  books: BookModel[] = [
    {
      id: 1,
      title: 'Book 1',
      author: this.authorService.authors[0],
      publisher: this.publisherService.publishers[0],
    },
    {
      id: 2,
      title: 'Book 2',
      author: this.authorService.authors[1],
      publisher: this.publisherService.publishers[1],
    },
    {
      id: 3,
      title: 'Book 3',
      author: this.authorService.authors[2],
      publisher: this.publisherService.publishers[2],
    },
  ];

  async getBooks(): Promise<BookModel[]> {
    return this.books;
  }
}
