import { BaseSchema } from "src/shared/infra/database/typeorm/schema/base-schema";
import { Column, Entity } from "typeorm";

@Entity('plan')
export class PlanSchema extends BaseSchema {
  @Column({name: 'name'})
  name: string;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'value', type: "decimal", precision: 2})
  value: string;
}