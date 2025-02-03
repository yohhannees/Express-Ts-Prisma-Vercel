import { Ibelonging } from "./Ibelonging";
import { Iqrcode } from "./IQrcode";

export interface IUser {
  id: string;
  telegramId: string;
  photoUrl?: string;
  PictureUrl?: string;
  name: string;
  studentId: string;
  createdAt: string;
  updatedAt: string;
  Belonging: Ibelonging;
  QRCode: Iqrcode;
}
