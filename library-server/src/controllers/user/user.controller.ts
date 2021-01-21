import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from '../../models/user.model';

@ApiTags('Users')
@Controller('users')
export class UserController {
  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns author by ID.',
  })
  getUser(number: number) {
    return undefined;
  }

  @Post()
  @HttpCode(204)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 204,
    description: 'Returns created user.',
  })
  addUser(userModel: UserModel) {
    return undefined;
  }
}
