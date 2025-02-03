import { User } from "@prisma/client";

export interface Iqrcode {
  id: string;
  telegramId: string;
  student: User;
  studentId: string;
  qrData: string;
  createdAt: Date;
}
