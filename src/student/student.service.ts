import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  StudentDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './model/Student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): StudentResponseDto[] {
    return this.students;
  }
  getStudentById(id: string): StudentResponseDto {
    return this.students.find((student) => {
      return student.id === id;
    });
  }
  createStudent(body: StudentDto): StudentResponseDto {
    const student: StudentResponseDto = {
      id: Date.now().toString(),
      ...body,
    };
    students.push(student);
    return student;
  }
  updateStudentById(id: string, body: UpdateStudentDto): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const upddatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id: id,
          ...body,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = upddatedStudentList;
    return updatedStudent;
  }
  getStudentByTeacherID(teacherId: string): StudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }
  updateStudentsTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const upddatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = upddatedStudentList;
    return updatedStudent;
  }
}
