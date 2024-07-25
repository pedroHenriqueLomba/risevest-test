import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export abstract class UserRepository {
  abstract create(data: any): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract findOne(where: any, select: any): Promise<User>;
}
