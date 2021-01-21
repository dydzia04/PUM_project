import { Injectable } from '@nestjs/common';
import { AuthorModel } from '../../models/author.model';

@Injectable()
export class AuthorService {
  public authors: AuthorModel[] = [
    {
      id: 1,
      first_name: 'Author',
      last_name: 'First',
    },
    {
      id: 2,
      first_name: 'Author',
      last_name: 'Second',
    },
    {
      id: 3,
      first_name: 'Author',
      last_name: 'Third',
    },
  ];

  async getAuthors(): Promise<AuthorModel[]> {
    return this.authors;
  }
}
