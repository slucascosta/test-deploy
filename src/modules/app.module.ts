import { Module } from "@nestjs/common";
import { HealthCheckModule } from "./health-check/module";
import { HelloWorldModule } from "./hello-world/module";

@Module({
  imports: [HealthCheckModule, HelloWorldModule],
  controllers: [],
  providers: []
})
export class AppModule {}
