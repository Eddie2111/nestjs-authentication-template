import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Post("/createStudent")
  createStudent(@Body() student: CreateStudentDto): Promise<string> {
    console.log("Received createStudent request:", student);
    return this.appService.createStudent(student);
  }

  @Post("/createUser")
  createUser(@Body() student: CreateStudentDto): Promise<string> {
    console.log("Received createUser request:", student);
    return this.appService.createUser(student);
  }
  @Get("/getTest")
  getTest() {
    return this.appService.getTest();
  }
}
