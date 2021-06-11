import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResponseDto, UserSignUpDto } from './dto/User.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private UserSchema: Model<UserResponseDto>,
  ) {}

  async signup(body: UserSignUpDto) {
    const { name, email, password } = body;
    const user = await this.UserSchema.findOne({ email });
    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User already exist!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const _password = await bcrypt.hash(password, 10);
    const newUser = await this.UserSchema.create({
      name,
      email,
      password: _password,
    });
    return `User created with id ${newUser._id}`;
  }

  async findUser(email: string): Promise<UserResponseDto> {
    return this.UserSchema.findOne({ email });
  }
  // async vaildate(email, password): Promise<any> {
  //   const user = await this.UserSchema.findOne({ email });
  //   if (user) {
  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (isMatch) {
  //       const token = this.jwtService.sign({
  //         username: user.email,
  //         sub: user._id,
  //       });
  //       return { message: `User ${user.name} signed in!`, token };
  //     } else {
  //       throw new UnauthorizedException({
  //         status: HttpStatus.UNAUTHORIZED,
  //         error: 'Wrong Credentials!',
  //       });
  //     }
  //   }
  //   throw new HttpException(
  //     {
  //       status: HttpStatus.FORBIDDEN,
  //       error: "User doesn't exist!",
  //     },
  //     HttpStatus.FORBIDDEN,
  //   );
  // }
}
