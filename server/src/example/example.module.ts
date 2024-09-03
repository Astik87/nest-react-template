import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { Example } from './entities/example.entity';

@Module({
  imports: [SequelizeModule.forFeature([Example])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
