import { PrismaClient, CurfewRule } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCurfewRules = async (): Promise<CurfewRule[]> => {
  return prisma.curfewRule.findMany();
};

export const getCurfewRuleById = async (
  id: string
): Promise<CurfewRule | null> => {
  return prisma.curfewRule.findUnique({ where: { id } });
};

export const createCurfewRule = async (
  data: Omit<CurfewRule, "id">
): Promise<CurfewRule> => {
  return prisma.curfewRule.create({ data });
};

export const updateCurfewRule = async (
  id: string,
  data: Partial<CurfewRule>
): Promise<CurfewRule> => {
  return prisma.curfewRule.update({ where: { id }, data });
};

export const deleteCurfewRule = async (id: string): Promise<CurfewRule> => {
  return prisma.curfewRule.delete({ where: { id } });
};
