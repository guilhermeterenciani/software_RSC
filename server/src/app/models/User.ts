import {Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    siape: String;

    @Column()
    senha: String;
}

export default User;