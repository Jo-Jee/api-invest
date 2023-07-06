import { Controller, Get } from '@nestjs/common';
import { encrypt } from 'src/util/crypto.util';

@Controller('user')
export class UserController {
  @Get()
  test() {
    return encrypt('test');
  }
}
