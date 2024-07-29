import { Module } from "@nestjs/common";
import { UploadFilesLocalDirService } from "./upload-files-local-dir/upload-files-local-dir.service";
import { UploadFilesController } from "./upload-files.controller";
import { UploadFileUsecase } from "./usecases/upload-files.usecase";
import { CriptModule } from "src/cript/cript.module";

@Module({
  imports: [
    CriptModule,
  ],
  providers: [
    {
      provide: "IUploadFilesService",
      useClass: UploadFilesLocalDirService,
    },
    UploadFileUsecase,
  ],
  controllers: [UploadFilesController],
})
export class UploadFilesModule {}
