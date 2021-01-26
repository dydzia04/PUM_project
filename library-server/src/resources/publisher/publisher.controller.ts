import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { ApiTags } from '@nestjs/swagger';

/**
 * Controller for publishers
 */
@ApiTags('Publishers')
@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  /**
   * Method creating new publisher
   * @param createPublisherDto
   */
  @Post()
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publisherService.create(createPublisherDto);
  }

  /**
   * Method returning all publishers
   */
  @Get()
  findAll() {
    return this.publisherService.findAll();
  }

  /**
   * Method returning publisher by ID
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherService.findOne(id);
  }

  /**
   * Method updating publisher by ID
   * @param id
   * @param updatePublisherDto
   */
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publisherService.update(id, updatePublisherDto);
  }

  /**
   * Method deleting publisher by ID
   * @param id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(id);
  }
}
