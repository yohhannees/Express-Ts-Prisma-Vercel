import { IUser } from "./IUser";

export interface Ibelonging {
  id: string;
  telegramId: string;
  itemName: string;
  itemPhoto: string;
  itemDescription: string;
  serialNumber: string;
  student: IUser;
  studentId: string;
  createdAt: string;
  updatedAt: string;
}
