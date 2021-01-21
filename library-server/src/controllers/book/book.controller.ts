import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { BookService } from '../../services/book/book.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookModel } from '../../models/book.model';

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

  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns book by ID.',
  })
  getBook(@Param('id') id: number) {
    return undefined;
  }

  @Post()
  @HttpCode(204)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 204,
    description: 'Returns created book.',
  })
  addBook(BookModel: BookModel) {
    return undefined;
  }
}
