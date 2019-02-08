import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  OneToMany
} from "typeorm";
import User from "./User";
import Chat from "./Chat";

class ChatRoom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => User, user => user.chatRooms)
  participant: User[];

  @OneToMany(type => Chat, chat => chat.chatRoom)
  chat: Chat[];

  @CreateDateColumn() createdAt: string;
}

export default ChatRoom;
