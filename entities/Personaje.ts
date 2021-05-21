import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column, ManyToOne } from "typeorm";
import { Usuarios } from "./Usuarios"
import { Planeta } from "./Planeta";

@Entity()
  export class Personaje extends BaseEntity {
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

      
     @ManyToOne(()=> Planeta, planeta=>planeta.personajes)
      planeta: Planeta
  }