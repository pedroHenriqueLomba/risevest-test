import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from "class-validator";
import { Injectable, Inject } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaClient } from "@prisma/client/extension";

export enum EntitiesEnum {
  USER = "user",
}

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [entityClass, column] = args.constraints;

    const repository: PrismaClient = this.prismaService[entityClass];

    const count = await repository.count({
      where: {
        [column]: value,
      },
    });
    return count === 0;
  }

  defaultMessage(args: ValidationArguments): string {
    const [entityClass, column] = args.constraints;
    return `${column} already exists.`;
  }
}

export function IsUnique(
  entityClass: EntitiesEnum,
  column: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [entityClass, column],
      validator: IsUniqueConstraint,
    });
  };
}
