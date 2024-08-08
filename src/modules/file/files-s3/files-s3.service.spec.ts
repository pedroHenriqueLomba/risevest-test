import { Test, TestingModule } from '@nestjs/testing';
import { FilesS3Service } from './files-s3.service';

describe('FilesS3Service', () => {
  let service: FilesS3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesS3Service],
    }).compile();

    service = module.get<FilesS3Service>(FilesS3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
