import { Module } from '@nestjs/common';
import { CriptService } from './cript.service';

@Module({
  providers: [CriptService],
  exports: [CriptService],
})
export class CriptModule {}
