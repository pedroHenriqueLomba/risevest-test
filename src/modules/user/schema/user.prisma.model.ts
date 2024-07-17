import { PrismaClient } from "@prisma/client/extension";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { UserRepository } from "./user.repository";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserPrismaModel extends UserRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
    this.model = this.prisma.user;
  }

  private model!: PrismaClient;

  async create(data: User): Promise<any> {
    try {
      return await this.model.create({ data });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(user: User): Promise<any> {
    try {
      return await this.model.update({ where: { id: Number(user.id) }, data: user });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.model.findUnique({ where: { id: Number(id) } });
      return user;
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
