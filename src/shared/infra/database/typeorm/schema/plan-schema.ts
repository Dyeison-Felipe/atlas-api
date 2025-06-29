import { Column, PrimaryGeneratedColumn } from "typeorm";

export class PlanSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'value', type: 'decimal', precision: 2})
  value: number;
}