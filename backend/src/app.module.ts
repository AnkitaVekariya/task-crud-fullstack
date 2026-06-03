import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/models/task.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'taskdb',

      autoLoadModels: true,
      synchronize: true,

      models: [Task],
    }),

    TasksModule,
  ],
})
export class AppModule {}