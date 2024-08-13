import { SetMetadata } from "@nestjs/common";
import { UserRole } from "src/modules/user/enum/user.roles.enum";

export const USER_ROLES_KEY = "roles";
export const UserRoles = (...roles: UserRole[]) =>
  SetMetadata(USER_ROLES_KEY, roles);
