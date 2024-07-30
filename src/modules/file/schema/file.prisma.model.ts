import { PrismaClient } from "@prisma/client/extension";
import { FileRepository } from "./file.repository";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { HttpException, HttpStatus } from "@nestjs/common";

export class FilePrismaModel extends FileRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    this.model = this.prisma.file;
  }
  private model!: PrismaClient;

  async create(data: any): Promise<any> {
    try {
      return await this.model.create({ data });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(data: any): Promise<any> {
    try {
      return await this.model.update({
        where: { id: Number(data.id) },
        data: data,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findById(id: string): Promise<any> {
    try {
      const file = await this.model.findUnique({ where: { id: Number(id) } });
      return file;
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(where: any, select: any): Promise<any> {
    try {
      return await this.model.findUnique({ where, select });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
