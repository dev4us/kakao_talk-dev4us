import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert
} from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  @IsEmail()
  email: string;

  @Column({ type: "text", nullable: false })
  verifiedCode: string;

  @Column({ type: "boolean", nullable: false, default: false })
  isVerified: boolean;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createCode(): void {
    this.verifiedCode = Math.random()
      .toString(36)
      .substr(2);
  }
}

export default Verification;
