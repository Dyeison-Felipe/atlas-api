import { BaseEntity } from "src/shared/domain/entity/base-entity";

export type TenantProps = {
  socialReason: string;
  fantasyName: string;
  cnpj: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  email: string;
  checkEmail: boolean;
  planId: string;
  active: boolean;
  certificateDigital: string;
  stateRegistration: string;
  taxRegime: string;
  natureOfOperation: string;
  csc: string;
  cnae: string;
  cstCsosn?: string;
  cstPis?: string;
  cstConfins?: string;
  cstIpi?: string;
  municipalRegistration?: string;
}

export class Tenant extends BaseEntity<TenantProps> { }