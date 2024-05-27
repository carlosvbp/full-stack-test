import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Task from "./Task.entity";
import { getRounds, hashSync } from "bcryptjs";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password);
        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        };
    };
};