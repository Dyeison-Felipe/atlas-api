import { BaseEntity, BaseProps } from "src/shared/domain/entity/base-entity";

export interface EntityMapper<Schema, E extends BaseEntity<BaseProps>> {
  toEntity(schema: Schema):E;
}