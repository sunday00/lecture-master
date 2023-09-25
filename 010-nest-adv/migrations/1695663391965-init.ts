import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1695663391965 implements MigrationInterface {
  name = 'init1695663391965';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TYPE IF EXISTS user_role_enum`);
    await queryRunner.query(`CREATE TYPE user_role_enum AS ENUM ('ADMIN', 'USER')`);
    await queryRunner.query(
      `CREATE TABLE "torm_exam"."video" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "mimetype" character varying NOT NULL, "download_cnt" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_1a2f3856250765d72e7e1636c8e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "torm_exam"."user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "memo" character varying, "role" "torm_exam"."user_role_enum" NOT NULL DEFAULT 'USER', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "torm_exam"."refresh_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "REL_6bbe63d2fe75e7f0ba1710351d" UNIQUE ("user_id"), CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "torm_exam"."video" ADD CONSTRAINT "FK_0c06b8d2494611b35c67296356c" FOREIGN KEY ("user_id") REFERENCES "torm_exam"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "torm_exam"."refresh_token" ADD CONSTRAINT "FK_6bbe63d2fe75e7f0ba1710351d4" FOREIGN KEY ("user_id") REFERENCES "torm_exam"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "torm_exam"."refresh_token" DROP CONSTRAINT "FK_6bbe63d2fe75e7f0ba1710351d4"`);
    await queryRunner.query(`ALTER TABLE "torm_exam"."video" DROP CONSTRAINT "FK_0c06b8d2494611b35c67296356c"`);
    await queryRunner.query(`DROP TABLE "torm_exam"."refresh_token"`);
    await queryRunner.query(`DROP TABLE "torm_exam"."user"`);
    await queryRunner.query(`DROP TABLE "torm_exam"."video"`);
  }
}
