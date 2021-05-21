import { Entity, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, Column, OneToMany } from "typeorm";
import { Usuarios } from "./Usuarios"
import { Personaje } from "./Personaje";


@Entity()
  export class Planeta extends BaseEntity {
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

    
      @OneToMany(()=> Personaje, personaje=>personaje.planeta)
      personajes: Personaje[]
  }

  
