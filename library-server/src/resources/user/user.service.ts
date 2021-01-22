import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Service for user operations passed to controller
 */
@Injectable()
export class UserService {
  /**
   * Method creating new user using given parameter
   * @param createUserDto
   */
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  /**
   * Method returning all users
   */
  findAll() {
    return `This action returns all user`;
  }

  /**
   * Method returning user using given parameter
   * @param id
   */
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  /**
   * Method updating user using given parameters
   * @param id
   * @param updateUserDto
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  /**
   * Method deleting user using given parameter
   * @param id
   */
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
