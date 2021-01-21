import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './services/book/book.service';
import { UserService } from './services/user/user.service';
import { AuthorService } from './services/author/author.service';
import { PublisherService } from './services/publisher/publisher.service';
import { BookController } from './controllers/book/book.controller';
import { UserController } from './controllers/user/user.controller';
import { AuthorController } from './controllers/author/author.controller';
import { PublisherController } from './controllers/publisher/publisher.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    BookController,
    UserController,
    AuthorController,
    PublisherController,
  ],
  providers: [
    AppService,
    BookService,
    UserService,
    AuthorService,
    PublisherService,
  ],
})
export class AppModule {}
