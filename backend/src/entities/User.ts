import bcrypt from "bcrypt";
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne
} from "typeorm";
import { IsEmail } from "class-validator";
import Chat from "./Chat";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  @IsEmail()
  email: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "text", nullable: true })
  username: string;

  @Column({ type: "text", nullable: true })
  profilePhoto: string;

  @Column({ type: "text", nullable: true })
  backgroundPhoto: string;

  @Column({ type: "text", nullable: true })
  statusMsg: string;

  @Column({ type: "boolean", default: false })
  verifiedEmail: boolean;

  @OneToMany(type => User, user => user.friends)
  friends: User[];

  @OneToMany(type => Chat, chat => chat.sender)
  myMessage: Chat[];

  @ManyToOne(type => Chat, chat => chat.listeners)
  otherMessage: Chat;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
