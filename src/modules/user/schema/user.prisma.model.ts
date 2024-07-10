import { PrismaClient } from "@prisma/client/extension";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { UserRepository } from "./user.repository";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IUser } from "../interfaces/user.inteface";

@Injectable()
export class UserPrismaModel implements UserRepository {
  constructor(private readonly prisma: PrismaService) {
    this.model = this.prisma.user;
  }

  private model!: PrismaClient;

  async create(data: IUser): Promise<any> {
    try{
      return await this.model.create({ data });
    } catch (error) {
      throw new HttpException("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
