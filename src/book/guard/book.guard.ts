import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate {
    private key: string = "RTGFR455@#^TY%$YU&^5465THTYJTYJ";
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        if(request.header('Authorization') === undefined) return false;

        if(request.header('Authorization') === this.key) return true;
    }

}