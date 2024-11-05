import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JsonContentTypeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Перехватываем метод JSON для настройки заголовка
    res.setHeader('Content-Type', 'application/json');

    res.send = (body: any) => {
      res.setHeader('Content-Type', 'application/json');
      res.write(body);
      res.end();
      return res;
    };

    next();
  }
}
