import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Blogs')
export class Blogs extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'id_blogs'})
    blogsId!: number;

    @Column({length: 60})
    title!: string;

    @Column({length: 200})
    description!: string;

    @Column({length: 65535})
    content!: string;

    @CreateDateColumn({ name: 'date' })
    createdAt!: Date;

    @ManyToOne(() => User, {nullable: true})
    @JoinColumn({name: 'id_user'})
    user!: User;
}