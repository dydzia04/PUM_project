import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

/**
 * Service for authors operations passed to controller
 */
@Injectable()
export class AuthorService {
  /**
   * Method creating new author using given parameter
   * @param createAuthorDto
   */
  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  /**
   * Method finding all authors
   */
  findAll() {
    return `This action returns all author`;
  }

  /**
   * Method finding author by given parameter
   * @param id
   */
  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  /**
   * Method updating author using given parameters
   * @param id
   * @param updateAuthorDto
   */
  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  /**
   * Method deleting author using given parameter
   * @param id
   */
  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
