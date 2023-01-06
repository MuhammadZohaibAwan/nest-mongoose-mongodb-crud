import { Document } from 'mongoose';
export interface User extends Document {
    id?: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
}
