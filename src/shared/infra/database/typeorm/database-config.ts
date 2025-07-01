import { EnvConfigService } from "../../service/env-config/env-config.service";
import { ConfigService } from "@nestjs/config";
import { Client } from 'pg';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';

const envConfig = new EnvConfigService(new ConfigService);

export async function databaseConfig(): Promise<TypeOrmModuleOptions> {

    const client = new Client({
        host: envConfig.getDbHost(),
        port: envConfig.getDbPort(),
        user: envConfig.getDbUsername(),
        password: envConfig.getDbPassword(),
        database: envConfig.getDatabase(),
    });

    await client.connect();

    const result = await client.query(`SELECT 1 FROM pg_database WHERE datname='${client.database}'`);

    if (result.rowCount === 0) {
        await client.query(`CREATE DATABASE "${client.database}"`);
        console.log(`✅ Banco de dados "${client.database}" criado.`);
    } else {
        console.log(`💾 Banco de dados encontrado`)
    }

    await client.end();

    // Agora retorna a configuração para o TypeORM se conectar normalmente
    return {
        type: 'postgres',
        host: envConfig.getDbHost(),
        port: envConfig.getDbPort(),
        username: envConfig.getDbUsername(),
        password: envConfig.getDbPassword(),
        database: envConfig.getDatabase(),
        synchronize: false,
        entities: [
            path.resolve(
                __dirname,
                '../../../../core/**/infrastructure/typeorm/schema/*.schema.{ts,js}',
            ),

        ],
        migrations: [
            path.resolve(
                __dirname,
                '../../../../../shared/infrastructure/database/typeorm/migrations/*.{ts,js}',
            )
        ],
        migrationsRun: true,
    };

}