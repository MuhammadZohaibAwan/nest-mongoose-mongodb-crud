import { Document } from 'mongoose';

export interface User extends Document {
  id?: string; // id? means it's optional
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}
