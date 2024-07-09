import { SetMetadata } from "@nestjs/common";
import { UserRole } from "./user.roles.enum";

export const USER_KEY = "user";
export const UserRoles = (...roles: UserRole[]) => SetMetadata(USER_KEY, roles);
