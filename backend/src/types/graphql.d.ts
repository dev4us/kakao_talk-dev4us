export const typeDefs = ["type Chat {\n  id: Int!\n  message: String!\n  chatRoom: ChatRoom!\n  sender: User!\n  listeners: [User]\n  createdAt: String!\n}\n\ntype ChatRoom {\n  id: Int\n  participant: [User]!\n  chat: [Chat]\n  createdAt: String!\n}\n\ntype RequestEmailVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Query {\n  RequestEmailVerification: RequestEmailVerificationResponse!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  username: String\n  profilePhoto: String\n  backgroundPhoto: String\n  statusMsg: String\n  verifiedEmail: String!\n  friends: [User]\n  myMessage: [Chat]\n  otherMessage: Chat\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  RequestEmailVerification: RequestEmailVerificationResponse;
}

export interface RequestEmailVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface Chat {
  id: number;
  message: string;
  chatRoom: ChatRoom;
  sender: User;
  listeners: Array<User> | null;
  createdAt: string;
}

export interface ChatRoom {
  id: number | null;
  participant: Array<User>;
  chat: Array<Chat> | null;
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  username: string | null;
  profilePhoto: string | null;
  backgroundPhoto: string | null;
  statusMsg: string | null;
  verifiedEmail: string;
  friends: Array<User> | null;
  myMessage: Array<Chat> | null;
  otherMessage: Chat | null;
  createdAt: string;
  updatedAt: string | null;
}
