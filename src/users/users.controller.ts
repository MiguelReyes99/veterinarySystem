import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('api-users-v1')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post("upload")
    async uploadUser(@Body() user: UserDTO) {
        return this.usersService.uploadUser(user);
    }

    @Get("usersList")
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get("/:id")
    async getUserById(@Param("id") id: number) {
        return this.usersService.findUser(id);
    }

    @Put()
    updateUser(@Body() user: UserDTO) {
        return this.usersService.updateUser(user);
    }

    @Delete("/:id")
    deleteProduct(@Param("id") id: number) {
        return this.usersService.deleteUser(id);
    }
}
