import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthCheckService {
  getMessage() {
    return {
      message: "Ok, it's running..."
    };
  }
}
