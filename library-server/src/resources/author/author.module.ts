import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { DatabaseService } from '../../database/database.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, DatabaseService],
})
export class AuthorModule {}
