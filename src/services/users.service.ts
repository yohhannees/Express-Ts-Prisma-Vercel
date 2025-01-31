import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const getUserByTelegramId = async (
  telegramId: string
): Promise<User | null> => {
  return prisma.user.findUnique({ where: { telegramId } });
};

export const upsertUser = async (data: Omit<User, "id">): Promise<User> => {
  return prisma.user.upsert({
    where: { telegramId: data.telegramId },
    update: data,
    create: data,
  });
};

export const updateUser = async (
  telegramId: string,
  data: Partial<User>
): Promise<User> => {
  return prisma.user.update({ where: { telegramId }, data });
};

export const deleteUser = async (telegramId: string): Promise<User> => {
  return prisma.user.delete({ where: { telegramId } });
};
