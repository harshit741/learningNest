import { Controller, Get, Param } from '@nestjs/common';
import { TeacherResponseDto } from './dto/Teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers(): TeacherResponseDto[] {
    return this.teacherService.getTeacher();
  }

  @Get('/:stuId')
  getTeachersById(@Param('stuId') id: string): TeacherResponseDto {
    return this.teacherService.getTeacherById(id);
  }
}
