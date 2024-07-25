import { Test, TestingModule } from '@nestjs/testing';
import { CriptService } from './cript.service';

describe('CriptService', () => {
  let service: CriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriptService],
    }).compile();

    service = module.get<CriptService>(CriptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
