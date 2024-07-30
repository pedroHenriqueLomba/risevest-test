import { Injectable } from "@nestjs/common";
import { IFilesService } from "../interfaces/upload-files.interface";

@Injectable()
export class FilesLocalDirService implements IFilesService {
  async upload(file: File): Promise<string> {
    return "file-path";
  }

  async remove(filePath: string): Promise<void> {
    return;
  }
}
