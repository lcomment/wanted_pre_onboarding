import { Post } from './Post';
import {
    BaseEntity,
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
Index('id', ['id'], {});
@Entity({ schema: 'preonboardingdb', name: 'Companys' })
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ name: 'name' })
    name: string;

    @OneToMany((type) => Post, (post) => post.id, {
      cascade: true,
    })
    postList: Post[]
}