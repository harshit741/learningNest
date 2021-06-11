import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentTeacherController } from 'src/teacher/StudentTeacher.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherService } from 'src/teacher/teacher.service';
import { UserModule } from 'src/user/user.module';
import StudentController from '../student/student.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UserModule,
  ],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
