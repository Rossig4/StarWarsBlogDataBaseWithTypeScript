import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column } from "typeorm";
import { Planeta } from "./Planeta"
import { Personaje } from "./Personaje";

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

      @ManyToMany(()=> Personaje)
      @JoinTable()
      Personajes: Personaje[]

     @ManyToMany(()=> Planeta)
      @JoinTable()
      Planetas: Planeta[]

  }