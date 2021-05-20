import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column } from "typeorm";
import { Usuarios } from "./Usuarios"


  export class Personajes extends BaseEntity {
      @PrimaryGeneratedColumn()
      Id: number

      @Column()
      Nombre: string

      @Column()
      Estatura: number

      @Column()
      Nacimiento: Date

      @Column()
      Fotografía: string

      @Column()
      Color_de_ojos: string

      @Column()
      Ocupación: string
  }