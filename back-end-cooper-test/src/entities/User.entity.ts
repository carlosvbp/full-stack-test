import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Task from "./Task.entity";

@Entity("user")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 25, unique: true })
    nickname: string;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;

    @OneToMany(() => Task, task => task.user, { onDelete: "CASCADE" })
    tasks: Task[];
}