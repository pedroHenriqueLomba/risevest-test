import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IFilesService } from "../interfaces/file.service.interface";
import { writeFile } from "fs";

@Injectable()
export class FilesLocalDirService implements IFilesService {
  async upload(
    userId: string,
    identifier: number,
    fileExtension: string,
    buffer: Buffer
  ): Promise<string> {
    const filePath = `public/${userId}/${identifier}.${fileExtension}`;
    writeFile(
      filePath,
      buffer,
      (err) => {
        if (err) {
          throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    );
    return filePath;
  }

  async remove(filePath: string): Promise<void> {
    return;
  }
}
