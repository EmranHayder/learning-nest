import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let date = new Date().toISOString();
        let method = req.method.toUpperCase();
        let protocol = req.protocol;
        let host = req.get('host');
        let url = req.originalUrl;
        console.log(date, '  ', method + ': ', protocol + '://' + host + url);
        next();
    }
}