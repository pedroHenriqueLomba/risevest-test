import { Module } from "@nestjs/common";
import { IsUniqueConstraint } from "./unique.validator";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [IsUniqueConstraint],
  exports: [IsUniqueConstraint],
})
export class ValidatorsModule {}
