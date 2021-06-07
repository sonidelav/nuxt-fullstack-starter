import { Controller, Get } from "@nestjs/common";

@Controller()
export class ApiController {
    @Get()
    async root() {
        return 'Root of /api route'
    }
}
