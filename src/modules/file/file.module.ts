import { Module } from "@nestjs/common";
import { FilesLocalDirService } from "./files-local-dir/files-local-dir.service";
import { FileController } from "./file.controller";
import { UploadFileUsecase } from "./usecases/upload-file.usecase";
import { CriptModule } from "src/cript/cript.module";
import { FilePrismaModel } from "./schema/file.prisma.model";
import { DatabaseModule } from "src/database/database.module";
import { RemoveFileUsecase } from "./usecases/remove-file.usecase";
import { FilesS3Service } from './files-s3/files-s3.service';

@Module({
  imports: [
    CriptModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: "IFilesService",
      useClass: FilesS3Service,
    },
    {
      provide: "FileRepository",
      useClass: FilePrismaModel,
    },
    UploadFileUsecase,
    RemoveFileUsecase,
    FilesS3Service
  ],
  controllers: [FileController],
})
export class FilesModule {}
