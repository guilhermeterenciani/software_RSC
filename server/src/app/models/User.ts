import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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