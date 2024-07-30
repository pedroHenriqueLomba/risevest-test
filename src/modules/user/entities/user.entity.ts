import { PickType } from "@nestjs/mapped-types";
import { UserRole } from "@prisma/client";

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}

export class UserTokenData extends PickType(User, ["id", "email", "name"]) {}
