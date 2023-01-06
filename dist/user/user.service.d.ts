import { User } from './interfaces/user.interface';
import { CreateUserDto } from './userDto/createUser.dto';
import { UpdateUserDto } from './userDto/updateUser.dto';
import { Model } from 'mongoose';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(userId: string): Promise<User>;
    deleteUser(userId: string): Promise<User>;
}
