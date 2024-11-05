import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JsonContentTypeMiddleware } from './middlewares/JsonContentTypeMiddleware.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JsonContentTypeMiddleware).forRoutes('*');
  }
}
