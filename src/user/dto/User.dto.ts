export class UserSignUpDto {
  name: string;
  email: string;
  password: string;
}
export class UserSignInDto {
  email: string;
  password: string;
}
export class UserResponseDto {
  _id: string;
  name: string;
  email: string;
  password: string;
}
