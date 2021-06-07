import { Module } from "@nestjs/common";
import { ApiController } from "./ApiController";

@Module({
    controllers: [ApiController]
})
export class ApiModule {}
