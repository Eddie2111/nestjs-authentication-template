import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log("UsersController initialized");
  }

  @MessagePattern("createUser")
  create(@Payload() createUserDto: CreateUserDto) {
    console.log("createUser message received:", createUserDto);
    return this.usersService.create(createUserDto);
  }

  @MessagePattern("findAllUsers")
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern("findOneUser")
  findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  @MessagePattern("updateUser")
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern("removeUser")
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
  
  @MessagePattern({ cmd: '*' })
  handleAnyMessage(@Payload() data: any) {
    console.log("Unmatched message received:", data);
    return "Unmatched message handler";
  }
}
