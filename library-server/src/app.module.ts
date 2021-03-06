import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './resources/book/book.module';
import { AuthorModule } from './resources/author/author.module';
import { PublisherModule } from './resources/publisher/publisher.module';
import { UserModule } from './resources/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    PublisherModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
