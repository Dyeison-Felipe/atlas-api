import { AuditableSchema } from "src/shared/infrastructure/database/schemas/auditable.schema";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlanSchema } from "./plan.schema";

@Entity('tenant')
export class TenantSchema extends AuditableSchema {
    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ name: 'fantasy_name', type: 'varchar', length: 255, nullable: false })
    fantasyName: string;

    @Column({ name: 'cnpj', type: 'varchar', length: 14, nullable: false })
    cnpj: string;

    @Column({ name: 'zipcode', type: 'varchar', length: 8, nullable: false })
    zipcode: string;

    @Column({name: 'country', type: 'varchar', length: 255, nullable: false })
    country: string;

    @Column({ name: 'state', type: 'varchar', length: 255, nullable: false })
    state: string;

    @Column({ name: 'city', type: 'varchar', length: 255, nullable: false })
    city: string;

    @Column({ name: 'neighborhood', type: 'varchar', length: 255, nullable: false })
    neighborhood: string;

    @Column({ name: 'street', type: 'varchar', length: 255, nullable: false })
    street: string;

    @Column({ name: 'number', type: 'varchar', length: 255, nullable: false })
    number: string;

    @Column({ name: 'complement', type: 'varchar', length: 255, nullable: true })
    complement: string;

    @Column({ name: 'email', type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({name: 'check_email', type: 'boolean', nullable: false, default: false })
    checkEmail: boolean;

    @Column({name: 'active_account', type: 'boolean', nullable: false, default: false })
    activeAccount: boolean;

    @ManyToOne(() => PlanSchema)
    @JoinColumn({name: 'plan'})
    plan: PlanSchema;
}
