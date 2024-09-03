import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { ExampleModule } from './example/example.module';
import { AppController } from './app.controller';

import { getDatabaseConfig } from '@/global/database/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot(getDatabaseConfig()),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
