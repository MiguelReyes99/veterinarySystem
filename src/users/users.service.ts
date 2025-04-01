import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Repository, UpdateResult } from 'typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { USERS } from './model/users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(USERS) private usersRepository: Repository<USERS>
    ) {}

    async uploadUser(user: UserDTO) {
        return this.usersRepository.save(user);
    }

    async findUser(id: number) {
        const userExists = await this.usersRepository.findOne({ where: { id }});
        return userExists;
    }

    updateUser(user: UserDTO) {
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number) {
        const userExists = this.findUser(id);

        const rows: UpdateResult = await this.usersRepository.update(
            { id },
            { status: 0}
        )

        return rows.affected == 1;
    }
}
