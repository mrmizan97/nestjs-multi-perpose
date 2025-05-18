import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform: true, 
    forbidNonWhitelisted:true,
    exceptionFactory: (errors) => {
      const formattedErrors = {};
      errors.forEach(err => {
        const field = err.property;
        const constraints = err.constraints;
        if (constraints) {
          formattedErrors[field] = Object.values(constraints)[0]; 
        }
      });
      return new UnprocessableEntityException({ 
        status: false,
        message: 'Validation failed!',
        error: formattedErrors
       });
    },
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
