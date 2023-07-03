import { Controller } from '@nestjs/common';
import { InvestService } from './invest.service';

@Controller('invest')
export class InvestController {
  constructor(private investService: InvestService) {}
}
