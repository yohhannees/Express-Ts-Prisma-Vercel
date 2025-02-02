import { PrismaClient, Belonging } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBelongings = async (): Promise<Belonging[]> => {
  return prisma.belonging.findMany();
};

export const getBelongingByTelegramId = async (
  telegramId: string
): Promise<Belonging | null> => {
  return prisma.belonging.findUnique({ where: { telegramId } });
};

export const createBelonging = async (
  data: Omit<Belonging, "id">
): Promise<Belonging> => {
  return prisma.belonging.create({ data });
};

export const updateBelonging = async (
  telegramId: string,
  data: Partial<Belonging>
): Promise<Belonging> => {
  return prisma.belonging.update({ where: { telegramId }, data });
};

export const deleteBelonging = async (
  telegramId: string
): Promise<Belonging> => {
  return prisma.belonging.delete({ where: { telegramId } });
};
