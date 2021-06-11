import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentResponseDto } from '../student/model/Student.dto';

@Controller('teachers/:id/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudentsByTeacher(@Param('id') teacherId: string): StudentResponseDto[] {
    return this.studentService.getStudentByTeacherID(teacherId);
  }

  @Put('/:StuId')
  updateStudentByTeacher(
    @Param('id') teacherId: string,
    @Param('StuId') studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentsTeacher(teacherId, studentId);
  }
}
