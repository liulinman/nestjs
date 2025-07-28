import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const request = context.switchToHttp().getRequest();
        const customMessage = request.customMessage || 'success'; // 获取自定义消息，默认 'success'
        return {
          code: 200,
          data: data, // 处理的响应数据
          message: customMessage, // 如果自定义了消息，则使用它
        };
      }),
    );
  }
}
