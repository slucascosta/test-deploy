import { Test, TestingModule } from "@nestjs/testing";
import { HealthCheckController } from "./controller";
import { HealthCheckService } from "./service";

describe("AppController", () => {
  let appController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService]
    }).compile();

    appController = app.get<HealthCheckController>(HealthCheckController);
  });

  describe("root", () => {
    it('should return "Ok, it\'s running..."', () => {
      expect(appController.healthCheck().message).toBe("Ok, it's running...");
    });
  });
});
