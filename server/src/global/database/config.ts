import { SequelizeModuleOptions } from '@nestjs/sequelize';

export function getDatabaseConfig(): SequelizeModuleOptions {
  return {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    synchronize: true,
    sync: {
      alter: true,
    },
    logging: false,
  };
}
