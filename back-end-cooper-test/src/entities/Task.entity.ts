import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";

@Entity("tasks")
export default class Task {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({length: 120})
    name: string;

    @ManyToOne(() => User, user => user.tasks)
    user: User;
};