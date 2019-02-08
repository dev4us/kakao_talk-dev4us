import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
  OneToMany
} from "typeorm";
import User from "./User";
import ChatRoom from "./ChatRoom";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  message: string;

  @ManyToOne(type => ChatRoom, chatroom => chatroom.chat)
  chatRoom: ChatRoom;

  @ManyToOne(type => User, user => user.myMessage)
  sender: User;

  @OneToMany(type => User, user => user.otherMessage)
  listeners: User[];

  @CreateDateColumn() createdAt: string;
}

export default Chat;
