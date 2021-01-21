import { Test, TestingModule } from '@nestjs/testing';
import { PublisherController } from './publisher.controller';
import { PublisherModel } from '../../models/Publisher.model';

describe('PublisherController', () => {
  let controller: PublisherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublisherController],
    }).compile();

    controller = module.get<PublisherController>(PublisherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a value', () => {
    expect(controller.getPublishers()).toReturn();
  });

  it('should return a list of publishers', () => {
    expect(controller.getPublishers()).toBe(Array(PublisherModel));
  });

  it('should return a value', () => {
    expect(controller.getPublisher(1)).toReturn();
  });

  it('should return an publisher', () => {
    expect(controller.getPublisher(1)).toBe(PublisherModel);
  });

  it('should return a value', function () {
    expect(controller.addPublisher(new PublisherModel())).toBe(PublisherModel);
  });

  it('should create an publisher', function () {
    expect(controller.addPublisher(new PublisherModel())).toBe(PublisherModel);
  });
});
