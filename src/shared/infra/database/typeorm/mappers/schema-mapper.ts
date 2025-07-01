import { BaseEntity, BaseProps } from "src/shared/domain/entity/base-entity";

export interface SchemaMapper<Schema, E extends BaseEntity<BaseProps>> {
  toSchema(entity: E): Schema;
}