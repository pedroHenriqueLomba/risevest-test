import { Injectable } from "@nestjs/common";
import { IUploadFilesService } from "../interfaces/upload-files.interface";

@Injectable()
export class UploadFilesLocalDirService implements IUploadFilesService {
  async upload(file: File): Promise<string> {
    return "file-path";
  }

  async remove(filePath: string): Promise<void> {
    return;
  }
}
