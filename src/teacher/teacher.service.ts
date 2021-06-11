import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { TeacherResponseDto } from './dto/Teacher.dto';
@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeacher(): TeacherResponseDto[] {
    return this.teachers;
  }
  getTeacherById(id: string): TeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === id;
    });
  }
}
