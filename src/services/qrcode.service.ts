import { PrismaClient, QRCode } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllQRCodes = async (): Promise<QRCode[]> => {
  return prisma.qRCode.findMany();
};

export const getQRCodeByTelegramId = async (
  telegramId: string
): Promise<QRCode | null> => {
  return prisma.qRCode.findUnique({ where: { telegramId } });
};

export const createQRCode = async (
  data: Omit<QRCode, "id">
): Promise<QRCode> => {
  return prisma.qRCode.create({ data });
};

export const updateQRCode = async (
  telegramId: string,
  data: Partial<QRCode>
): Promise<QRCode> => {
  return prisma.qRCode.update({ where: { telegramId }, data });
};

export const deleteQRCode = async (telegramId: string): Promise<QRCode> => {
  return prisma.qRCode.delete({ where: { telegramId } });
};
