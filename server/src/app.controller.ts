import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('app')
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Say hello' })
  @ApiOkResponse({ example: 'Hello!!!' })
  async test() {
    return 'Hello!!!';
  }
}
