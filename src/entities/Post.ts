import {
    BaseEntity,
    Column,
    Entity,
    Index,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Company } from './Company';
import { User } from './User';
  
Index('id', ['id'], {});
@Entity({ schema: 'preonboardingdb', name: 'Posts' })
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @ManyToOne((type) => Company, (company) => company.id)
    company: Company;

    @Column({ name: 'nation' })
    nation: string;

    @Column({ name: 'region' })
    region: string;

    @Column({ name: 'position' })
    position: string;

    @Column({ name: 'bonus' })
    bonus: number;

    @Column({ name: 'content', length: 4000 })
    content: string;

    @Column({ name: 'skill' })
    skill: string;

    @OneToMany((type) => User, (user) => user.id)
    user: User;
}