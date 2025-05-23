import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_todo_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // set to false in production
})
    ,TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
