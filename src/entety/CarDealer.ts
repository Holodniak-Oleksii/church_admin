import { IsDefined } from "class-validator";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Car } from "./Car";

@Entity()
export class CarDealer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined()
  name: string;

  @OneToMany((type) => Car, (car) => car.carDealer)
  cars: Array<Car>;
}
