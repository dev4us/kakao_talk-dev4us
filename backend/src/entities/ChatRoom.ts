import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  Entity,
  ManyToMany
} from "typeorm";
import User from "./User";
import Chat from "./Chat";

@Entity()
class ChatRoom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => User, { cascade: false })
  participant: User[];

  @OneToMany(type => Chat, chat => chat.chatRoom)
  chat: Chat[];

  @CreateDateColumn() createdAt: string;
}

export default ChatRoom;
