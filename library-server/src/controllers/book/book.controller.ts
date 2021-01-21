import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { BookService } from '../../services/book/book.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns list of books.',
  })
  getBooks() {
    return this.bookService.getBooks();
  }
}
