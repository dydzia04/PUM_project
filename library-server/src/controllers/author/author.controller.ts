import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { AuthorService } from '../../services/author/author.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

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
}
