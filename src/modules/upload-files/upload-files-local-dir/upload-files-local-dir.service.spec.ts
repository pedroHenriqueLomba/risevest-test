import { Test, TestingModule } from '@nestjs/testing';
import { UploadFilesLocalDirService } from './upload-files-local-dir.service';

describe('UploadFilesLocalDirService', () => {
  let service: UploadFilesLocalDirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadFilesLocalDirService],
    }).compile();

    service = module.get<UploadFilesLocalDirService>(UploadFilesLocalDirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
