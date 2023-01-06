import { UserService } from './user.service';
import { CreateUserDto } from './userDto/createUser.dto';
import { UpdateUserDto } from './userDto/updateUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateUser(response: any, userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    getUsers(response: any): Promise<any>;
    getUser(response: any, userId: string): Promise<any>;
    deleteUser(response: any, userId: string): Promise<any>;
}
