import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board')
export class Board {
    @PrimaryGeneratedColumn()
    id : number;

    @Column('varchar' , {name : 'title'})
    title: String;

    @Column('varchar', {name : 'contents'})
    contents: String;

    @Column('timestamp', {
        name: 'created_at',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date | null;

    @Column('timestamp', {
        name: 'updated_at',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    })
    updated_at: Date | null;
}