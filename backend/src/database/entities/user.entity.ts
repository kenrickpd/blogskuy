import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingEmbed } from './embedded/tracking.embed';
import { Blogs } from './blogs.entity';

export enum UserRole{
    USER,
    ADMIN
}

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id_user' })
    userId!: number;

    @Column({ name: 'nama', length: 64 })
    name!: string;

    @Column({ length: 64, unique: true })
    email!: string;

    @Column({ length: 64 })
    password!: string;

    @Column({ length: 64 })
    alamat!: string;

    @Column({ name: 'tgl_lahir', type: 'date' })
    tglLahir!: Date;

    @Column({ name: 'no_telp', length: 20 })
    phone!: string;

    @Column({ type: 'enum', default: UserRole.USER, enum: UserRole })
    role!: UserRole;

    @Column(() => TrackingEmbed, { prefix: false })
    track!: TrackingEmbed;

    @OneToMany(() => Blogs, (blogs) => blogs)
    blogs!: Blogs[];

    toJSON() {
        const cloned = { ...this } as Record<string, unknown>;
        delete cloned.password;
        return cloned;
    }

}
