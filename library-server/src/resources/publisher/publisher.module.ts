import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { DatabaseService } from '../../database/database.service';

@Module({
  controllers: [PublisherController],
  providers: [PublisherService, DatabaseService],
})
export class PublisherModule {}
