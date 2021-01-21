import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserModel } from '../../models/user.model';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a value', () => {
    expect(controller.getUser(1)).toReturn();
  });

  it('should return an user', () => {
    expect(controller.getUser(1)).toBe(UserModel);
  });

  it('should return a value', function () {
    expect(controller.addUser(new UserModel())).toBe(UserModel);
  });

  it('should create an user', function () {
    expect(controller.addUser(new UserModel())).toBe(UserModel);
  });
});
