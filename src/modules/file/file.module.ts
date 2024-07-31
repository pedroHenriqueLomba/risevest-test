import { Module } from "@nestjs/common";
import { FilesLocalDirService } from "./files-local-dir/files-local-dir.service";
import { FileController } from "./file.controller";
import { UploadFileUsecase } from "./usecases/upload-file.usecase";
import { CriptModule } from "src/cript/cript.module";
import { FilePrismaModel } from "./schema/file.prisma.model";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [
    CriptModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: "IFilesService",
      useClass: FilesLocalDirService,
    },
    {
      provide: "FileRepository",
      useClass: FilePrismaModel,
    },
    UploadFileUsecase,
  ],
  controllers: [FileController],
})
export class FilesModule {}
