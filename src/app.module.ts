import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS } from './users/model/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      "dialect": "mssql",
      "host": "HappyPaws.mssql.somee.com",
      "port": 3306,
      "username": "miguelrg99_SQLLogin_1",
      "password": "lzqe564te6",
      "database": "HappyPaws",
      "models": [USERS],
      "synchronize": true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
