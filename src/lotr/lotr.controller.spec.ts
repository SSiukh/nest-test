import { Test, TestingModule } from '@nestjs/testing';
import { LotrController } from './lotr.controller';

describe('LotrController', () => {
  let controller: LotrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotrController],
    }).compile();

    controller = module.get<LotrController>(LotrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
