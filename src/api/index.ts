/**
 * Nuxt Server Middleware based on NestJS
 */
import express from 'express';
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { ApiModule } from "./nest/ApiModule";
import { INestApplication, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class AppMiddleware implements NestMiddleware {
    private nestInstance: INestApplication | undefined;

    constructor(private expressInstance: Express.Application) {
        NestFactory
            .create(ApiModule, new ExpressAdapter(expressInstance)).then(app => {
                app.init().then(app => {
                    this.nestInstance = app;
                })
            })
    }

    use(req: any, res: any, next: () => void) {
        next();
    }
}

const app = express();
const nestApp = new AppMiddleware(app);
app.use(nestApp.use);

export default {
    path: '/api',
    handler: app
};
