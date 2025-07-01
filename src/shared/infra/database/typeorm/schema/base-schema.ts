import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export type SchemaBaseProps = Record<string, unknown>;

export type SchemaProps = Partial<InstanceType<typeof BaseSchema>>;

export abstract class BaseSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', nullable: true })
  deletedAt: Date;

  @Column({ name: 'createdBy', nullable: true })
  createdBy: string;

  @Column({ name: 'updatedBy', nullable: true })
  updatedBy: string;

  @Column({ name: 'deletedBy', nullable: true })
  deletedBy: string;

  static with<Props extends SchemaBaseProps, Ent extends BaseSchema>(
		this: new (
			props: Props & SchemaProps,
		) => Ent,
		props: Props & SchemaProps,
	): Ent {
    // new this(props): tipa corretamente a classe que estende BaseSchema, garantindo que o new this(...) funcione.
		const schemaInstance = new this(props);
    // copia todas as propriedades do props para a instância. Retorna a nova instância com os dados preenchidos.
		Object.assign(schemaInstance, props);
		return schemaInstance;
	}

}