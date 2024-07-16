import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateStudentDto, HelloWorldResponseDto } from "./app.dto";

@Injectable()
export class AppService {
  constructor(
    @Inject("UsersService") private readonly client: ClientProxy,
    @Inject("TestService") private readonly test: ClientProxy) {}

  getHello(): HelloWorldResponseDto {
    return {
      status: 200,
      message: "Hello world",
      data: [1, 2, 3, 4],
    };
  }

  async createStudent(student: CreateStudentDto): Promise<string> {
    console.log("Sending createUser message:", student);
    const response = await this.client
      .send("createUser", student)
      .toPromise();
    console.log("Received response:", response);
    return JSON.stringify(response);
  }

  async createUser(createUserDto: any) {
    console.log("Sending createUser message:", createUserDto);
    const response = await this.client
      .send("createUser", createUserDto)
      .toPromise();
    console.log("Received response:", response);
    return response;
  }
  async getTest() {
    const response = await this.test.send("findAllTest","").toPromise();
    return response;
  }
}
