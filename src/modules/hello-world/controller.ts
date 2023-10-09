import { Controller, Get } from "@nestjs/common";

@Controller()
export class HelloWorldController {
  @Get()
  getHelloWorld(): string {
    return "Hello World !";
  }
}
