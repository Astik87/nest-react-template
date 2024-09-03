import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Example extends Model<Example> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
}
