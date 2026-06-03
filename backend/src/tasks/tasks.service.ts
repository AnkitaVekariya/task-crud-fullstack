import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Task } from './models/task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  create(dto: CreateTaskDto) {
    return this.taskModel.create(dto as any);
  }

  findAll() {
    return this.taskModel.findAll();
  }

  findOne(id: number) {
    return this.taskModel.findByPk(id);
  }

  async update(id: number, dto: CreateTaskDto) {
    const task = await this.findOne(id);

    if (!task) return null;

    return task.update(dto);
  }

  async remove(id: number) {
    const task = await this.findOne(id);

    if (!task) return null;

    await task.destroy();

    return {
      message: 'Deleted Successfully',
    };
  }
}