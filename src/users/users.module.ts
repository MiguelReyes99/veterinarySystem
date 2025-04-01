import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS } from './model/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
        SequelizeModule.forFeature([USERS])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
