import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { AuthorService } from '../../services/author/author.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthorModel } from '../../models/author.model';

@ApiTags('Authors')
@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns list of authors.',
  })
  getAuthors() {
    return this.authorService.getAuthors();
  }

  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns author by ID.',
  })
  getAuthor(@Param('id') id: number) {
    return undefined;
  }

  @Post()
  @HttpCode(204)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 204,
    description: 'Returns created author.',
  })
  addAuthor(authorModel: AuthorModel) {
    return undefined;
  }
}
