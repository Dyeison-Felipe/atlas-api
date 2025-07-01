import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePlan1751245911741 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const isTableExists = await queryRunner.hasTable('plan');

    if (!isTableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'plan',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'value',
              type: 'decimal',
              isNullable: false,
            },
            {
              name: 'createdAt',
              type: 'TIMESTAMP',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'updatedAt',
              type: 'TIMESTAMP',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'deletedAt',
              type: 'TIMESTAMP',
              isNullable: true,
            },
            {
              name: 'createdBy',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'updatedBy',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'deletedBy',
              type: 'varchar',
              isNullable: true,
            }

          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
