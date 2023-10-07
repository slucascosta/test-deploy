import { Controller, Get } from "@nestjs/common";
import { HealthCheckService } from "./service";

@Controller("health-check")
export class HealthCheckController {
  constructor(private readonly service: HealthCheckService) {}

  @Get()
  healthCheck(): { message: string } {
    return this.service.getMessage();
  }
}
