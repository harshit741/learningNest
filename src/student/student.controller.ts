import { Param, Body, Controller, Get, Post, Put } from '@nestjs/common';
import {
  StudentDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './model/Student.dto';
import { StudentService } from './student.service';

@Controller('students')
class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): StudentResponseDto[] {
    return this.studentService.getStudents();
  }
  @Get('/:id')
  getStudentById(@Param('id') id): StudentResponseDto {
    return this.studentService.getStudentById(id);
  }
  @Post()
  createStudent(@Body() body: StudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }
  @Put('/:id')
  updateStudent(
    @Param('id') id: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudentById(id, body);
  }
}
export default StudentController;
