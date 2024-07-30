import { Module } from "@nestjs/common";
import { FilesLocalDirService } from "./files-local-dir/files-local-dir.service";
import { FilesController } from "./file.controller";
import { UploadFileUsecase } from "./usecases/upload-files.usecase";
import { CriptModule } from "src/cript/cript.module";

@Module({
  imports: [
    CriptModule,
  ],
  providers: [
    {
      provide: "IFilesService",
      useClass: FilesLocalDirService,
    },
    UploadFileUsecase,
  ],
  controllers: [FilesController],
})
export class UploadFilesModule {}
