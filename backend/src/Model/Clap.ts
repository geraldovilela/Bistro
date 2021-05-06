import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("Clap")
class Clap {
    @Column()
    IdUser: number;
    @Column()
    count: number;
    @PrimaryColumn()
    IdArtigo: string
    @CreateDateColumn()
    created_at?: Date
}

export default Clap;