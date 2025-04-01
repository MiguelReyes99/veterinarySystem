import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { USERS } from './users/model/users.model';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'HappyPaws1.mssql.somee.com',
      port: 1433,
      username: 'Moral_SQLLogin_1',
      password: 'pu6pr7cnyk',
      database: 'HappyPaws1',
      entities: [USERS],
      synchronize: true,
      options: {
        encrypt: false,
        enableArithAbort: true,
      }
    }),
  ],
})
export class AppModule { }


