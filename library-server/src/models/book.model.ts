import { AuthorModel } from './author.model';
import { PublisherModel } from './publisher.model';

export class BookModel {
  id?: number;
  title: string;
  author: AuthorModel;
  publisher: PublisherModel;
}
