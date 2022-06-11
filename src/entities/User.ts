import {
    BaseEntity,
    Column,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Post } from './Post';
  
Index('id', ['id'], {});
@Entity({ schema: 'preonboardingdb', name: 'Users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @ManyToOne((type) => Post, (post) => post.id)
    post: Post;
}