import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}