import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usersTable1642687233636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       await queryRunner.query("CREATE TABLE if not exists users (id int NOT NULL AUTO_INCREMENT, firstname varchar(255) NOT NULL, lastname varchar(255) NOT NULL, email varchar(255) NOT NULL, timestamp varchar(255) NOT NULL, name varchar(255) NOT NULL, password varchar(255) NOT NULL, confirmpassword varchar(255) NOT NULL, gender varchar(255) NOT NULL, PRIMARY KEY (id))");
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE users`);
    }

}
