import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';




// "Before creating a user,
// check whether the incoming data is valid."
export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}