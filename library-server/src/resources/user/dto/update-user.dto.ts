import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * Data Transfer Object for updating users
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
