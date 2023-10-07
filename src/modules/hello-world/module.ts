import { Module } from "@nestjs/common";
import { HelloWorldController } from "./controller";

@Module({
  controllers: [HelloWorldController]
})
export class HelloWorldModule {}
