import { Test, TestingModule } from '@nestjs/testing';
import { LotrService } from './lotr.service';

describe('LotrService', () => {
  let service: LotrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LotrService],
    }).compile();

    service = module.get<LotrService>(LotrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
