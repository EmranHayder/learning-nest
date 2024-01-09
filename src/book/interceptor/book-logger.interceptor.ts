import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Response } from "express";
import { Observable, map, tap } from "rxjs";

@Injectable()
export class BookLogger implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Before...');

        return next.handle().pipe(map(data => ({ data })));
    }

}