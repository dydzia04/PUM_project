import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiTags } from '@nestjs/swagger';

/**
 * Controller for authors
 */
@ApiTags('Authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  /**
   * Method creating new author
   * @param createAuthorDto
   */
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  /**
   * Method finding all authors
   */
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  /**
   * Method finding specified author by parameter given
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  /**
   * Method updating specified author by parameters given
   * @param id
   * @param updateAuthorDto
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  /**
   * Method deleting specified author by parameter given
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(id);
  }
}
