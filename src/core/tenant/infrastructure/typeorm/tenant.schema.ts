import { BaseSchema } from "src/shared/infra/database/typeorm/schema/base-schema";
import { Column } from "typeorm";

export class TenantSchema extends BaseSchema {
  @Column({name: 'name'})
  socialReason: string;

  @Column({name: 'fantasy_name'})
  fantasyName: string;

  @Column({name: 'cnpj'})
  cnpj: string;

  @Column({name: 'county'})
  country: string;

  @Column({name: 'state'})
  state: string;

  @Column({name: 'city'})
  city: string;

  @Column({name: 'neighborhood'})
  neighborhood: string;

  @Column({name: 'street'})
  street: string;

  @Column({name: 'email'})
  email: string;

  @Column({name: 'check_email', type: 'boolean'})
  checkEmail: boolean;

  @Column({name: 'plan_id'})
  planId: string;

  @Column({name: 'active', type: 'boolean'})
  active: boolean;

  @Column({name: 'certificate_digital'})
  certificateDigital: string;

  @Column({name: 'state_registration'})
  stateRegistration:string;

  @Column({name: 'tax_regime'})
  taxRegime: string;

  @Column({name: 'cst/csosno', nullable: true})
  cstCsosn: string;

  @Column({name: 'cst/pis', nullable: true})
  cstPis: string;

  @Column({name: 'cst/confins', nullable: true})
  cstConfins: string;

  @Column({name: 'cst/ipi', nullable: true})
  cstIpi: string;

  @Column({name: 'nature_of_operation', nullable: true})
  natureOfOperation: string;

  @Column({name: 'csc'})
  csc: string;

  @Column({name: 'CNAE'})
  cnae: string;

  @Column({name: 'municipal_registration', nullable: true})
  municipalRegistration: string;
}