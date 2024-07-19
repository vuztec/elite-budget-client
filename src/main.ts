import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './shared/filters/exception.filter';
import { InternalDisabledLogger } from './shared/utils/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new InternalDisabledLogger(),
    cors: true,
  });

  app.enableCors({
    origin: '*',
    methods: '*',
  });

  // Set global prefix
  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: 'health/provoke-error', method: RequestMethod.GET },
      { path: 'docs', method: RequestMethod.GET },
    ],
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Elite Budget')
    .setDescription('Elite Budget API')
    .setVersion('1.0')
    .addBearerAuth()
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // nest-pino Logger
  app.useLogger(app.get(Logger));

  // class-validator+class-transformer interceptor
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      disableErrorMessages: process.env.NODE_ENV === 'production' ? true : false,
    }),
  );

  // Exception filter to catch all http exceptions and return a json response
  app.useGlobalFilters(new HttpExceptionFilter());

  // Explicitly enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(8000);
}
bootstrap();
