import { Test, TestingModule } from '@nestjs/testing';
import { FilesLocalDirService } from './files-local-dir.service';

describe('FilesLocalDirService', () => {
  let service: FilesLocalDirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesLocalDirService],
    }).compile();

    service = module.get<FilesLocalDirService>(FilesLocalDirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
