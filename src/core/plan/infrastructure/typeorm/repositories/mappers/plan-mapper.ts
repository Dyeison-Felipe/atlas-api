import { EntityMapper } from "src/shared/infra/database/typeorm/mappers/entity-mapper";
import { Plan } from "src/core/plan/domain/entities/plan.entity";
import { SchemaMapper } from "src/shared/infra/database/typeorm/mappers/schema-mapper";
import { PlanSchema } from "../../schema/plan.schema";

export class PlanMapper implements SchemaMapper<PlanSchema, Plan>, EntityMapper<PlanSchema, Plan> {

  toSchema(entity: Plan): PlanSchema {
    return PlanSchema.with({
      id: entity.id,
      name: entity.name,
      description: entity.description,
      value: entity.value,
      audit: {
        createdAt: entity.audit.createdAt,
        updatedAt: entity.audit.updatedAt,
        deletedAt: entity.audit.deletedAt,
        createBy: entity.audit.createdBy,
        updateBy: entity.audit.updatedBy,
        deleteBy: entity.audit.deletedBy,
      }
    })
  }

  toEntity(schema: PlanSchema): Plan {
    return Plan.with({
      id: schema.id,
      name: schema.name,
      description: schema.description,
      value: schema.value,
      audit: {
        createdAt: schema.createdAt,
        updatedAt: schema.updatedAt,
        deletedAt: schema.deletedAt,
        createdBy: schema.createdBy,
        updatedBy: schema.updatedBy,
        deletedBy: schema.deletedBy,
      }
    })
  }

}