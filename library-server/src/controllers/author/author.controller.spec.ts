import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';
import { AuthorModel } from '../../models/author.model';

describe('AuthorController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a value', () => {
    expect(controller.getAuthors()).toReturn();
  });

  it('should return a list of authors', () => {
    expect(controller.getAuthors()).toBe(Array(AuthorModel));
  });

  it('should return a value', () => {
    expect(controller.getAuthor(1)).toReturn();
  });

  it('should return an author', () => {
    expect(controller.getAuthor(1)).toBe(AuthorModel);
  });

  it('should return a value', function () {
    expect(controller.addAuthor(new AuthorModel())).toBe(AuthorModel);
  });

  it('should create an author', function () {
    expect(controller.addAuthor(new AuthorModel())).toBe(AuthorModel);
  });
});
