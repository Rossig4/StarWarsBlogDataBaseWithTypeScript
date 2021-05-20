import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column } from "typeorm";
import { Usuarios } from "./Usuarios"


  export class Planetas extends BaseEntity {
      @PrimaryGeneratedColumn()
      Id: number

      @Column()
      Nombre: string

      @Column()
      Rotación: number

      @Column()
      Creación: Date

      @Column()
      Imagen: string
  }

