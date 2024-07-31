import { HttpException, HttpStatus } from "@nestjs/common";

export class UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;

  constructor(file: UploadedFile) {
    this.fieldname = file.fieldname;
    this.originalname = file.originalname;
    this.encoding = file.encoding;
    this.mimetype = file.mimetype;
    this.buffer = file.buffer;
    this.size = file.size;
  }

  getExtension() {
    const extension = this.mimetype.split("/")[1];
    if(!extension) throw new HttpException("Invalid file extension", HttpStatus.BAD_REQUEST);
    return extension;
  }
}
