import {
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from "class-validator";
import { UserRole } from "../enum/user.roles.enum";

export class UpdateUserWithAdminDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsStrongPassword({
    minLength: 8,
    minSymbols: 1,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password: string;
  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}
