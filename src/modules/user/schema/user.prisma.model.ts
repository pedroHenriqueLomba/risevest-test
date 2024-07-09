import { PrismaClient } from "@prisma/client/extension";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { UserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPrismaModel implements UserRepository {
  constructor(private readonly prisma: PrismaService) {
    this.model = this.prisma.user;
  }

  private model!: PrismaClient;

  async create(data: any): Promise<any> {
    return await this.model.create({ data });
  }
}
