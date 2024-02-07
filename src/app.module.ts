import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
//сборка в модуль контроллеров(реквесты ) и провайдеров(бизнес логики)
@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath:`.env`
      }
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: process.env.POSTGRES_USER,
      password: '123',
      database: process.env.POSTGRES_DB,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule
  ]
})
export class AppModule {}
