import { SetMetadata } from "@nestjs/common";
import { UserRole } from "@prisma/client";

export const USER_KEY = "user";
export const UserRoles = (...roles: UserRole[]) => SetMetadata(USER_KEY, roles);
