import { Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";

@Injectable()
export abstract class UserRepository {
  abstract create(data: Partial<User>): Promise<User>;
  abstract update(user: Partial<User>): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract findOne(where: any, select: any): Promise<User>;
}
