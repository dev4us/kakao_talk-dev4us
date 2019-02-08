import {
  BaseEntity,
  Column,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from "typeorm";
import User from "./User";
import ChatRoom from "./ChatRoom";

class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  message: string;

  @ManyToOne(type => ChatRoom, chatroom => chatroom.chat)
  chatRoom: ChatRoom;

  @OneToOne(type => User, user => user.chat)
  @JoinColumn()
  user: User;

  @CreateDateColumn() createdAt: string;
}

export default Chat;
