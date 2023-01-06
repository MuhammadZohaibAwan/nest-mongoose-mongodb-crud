import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(25)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(25)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @MaxLength(25)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly password: string;
}
