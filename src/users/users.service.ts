import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { USERS } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(USERS) private readonly usersRepository: Repository<USERS>
    ) {}

    async uploadUser(user: UserDTO) {
        return this.usersRepository.save(user);
    }

    async findUser(id?: number) {
        return await this.usersRepository.findOne({ 
            where: { id }
        });
    }

    updateUser(user: UserDTO) {
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number) {
        const userExists = this.findUser(id);

        const rows: UpdateResult = await this.usersRepository.update(
            { id },
            { status: parseInt("0") }
        )

        return rows.affected == 1;
    }
}
