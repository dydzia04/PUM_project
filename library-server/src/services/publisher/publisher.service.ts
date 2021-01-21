import { Injectable } from '@nestjs/common';
import { PublisherModel } from '../../models/publisher.model';

@Injectable()
export class PublisherService {
  public publishers: PublisherModel[] = [
    {
      id: 1,
      name: 'Publisher 1',
    },
    {
      id: 2,
      name: 'Publisher 2',
    },
    {
      id: 3,
      name: 'Publisher 3',
    },
  ];

  async getPublishers(): Promise<PublisherModel[]> {
    return this.publishers;
  }
}
