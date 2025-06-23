import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from "./typeorm/database-config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => await databaseConfig(),
        }),
    ],
})
export class DatabaseModule { }