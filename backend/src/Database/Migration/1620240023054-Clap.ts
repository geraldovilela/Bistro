import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Clap1620240023054 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       return await queryRunner.createTable(
            new Table({
                name: "Clap",
                columns: [
               {
                    name:"IdUser",
                    type:"integer",
                    isPrimary:true,
                },
                {
                    name:"count",
                    type:"integer",                    
                },
                {
                    name:"IdArtigo",
                    type:"uuid",
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()"
                }
            ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       return await queryRunner.dropTable("Clap")
    }

}
