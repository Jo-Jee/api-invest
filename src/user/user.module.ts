import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CryptoService } from 'src/util/crypto/crypto.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
