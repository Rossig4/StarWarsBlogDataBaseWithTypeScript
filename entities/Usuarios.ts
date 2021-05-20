import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column } from "typeorm";
import { Planetas } from "./Planetas"
import { Personajes } from "./Personajes";

    @Entity()
  export class Usuarios extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      nombre: string;

      @Column()
      apeliido: string;

      @Column()
      email: string;

      @Column()
      Password: string;
  }