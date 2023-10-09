import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import { PORT } from "./settings";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();