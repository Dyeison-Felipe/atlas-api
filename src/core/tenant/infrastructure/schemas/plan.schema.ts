import { AuditableSchema } from "src/shared/infrastructure/database/schemas/auditable.schema";
import { Column, Entity } from "typeorm";

@Entity('plan')
export class PlanSchema extends AuditableSchema {
    @Column({name: 'name', type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({name: 'description', type: 'text', nullable: false })
    description: string;

    @Column({name: 'price', type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({name: 'duration', type: 'integer', nullable: false })
    duration: number;
}