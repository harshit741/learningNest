import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UserSignUpDto } from './dto/User.dto';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  signup(@Body() body: UserSignUpDto) {
    return this.userService.signup(body);
  }
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signin(@Request() req) {
    return req.user;
  }
}
