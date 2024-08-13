import { PrismaClient } from "@prisma/client/extension";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { FileRepository } from "./file.repository";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { File } from "../entities/file.entity";

@Injectable()
export class FilePrismaModel extends FileRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    this.model = this.prisma.file;
  }
  private model!: PrismaClient;

  async create(data: Partial<File>): Promise<File> {
    try {
      return await this.model.create({ data });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(data: any): Promise<File> {
    try {
      return await this.model.update({
        where: { id: Number(data.id) },
        data: data,
      });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findById(id: string): Promise<File> {
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

  async findOne(where: Partial<File>, select: Partial<File>): Promise<File> {
    try {
      return await this.model.findUnique({ where, select });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteOne(where: any): Promise<void> {
    try {
      await this.model.delete({ where });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
