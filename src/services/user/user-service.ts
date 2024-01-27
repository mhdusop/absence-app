import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
   getAllUsers: async () => {
      return prisma.user.findMany();
   },
   getUserById: async (userId: string) => {
      return prisma.user.findUnique({ where: { uuid: userId } });
   },
   createUser: async (userData: any) => {
      return prisma.user.create({ data: userData });
   },
   updateUser: async (userId: string, updatedUserData: any) => {
      return prisma.user.update({ where: { uuid: userId }, data: updatedUserData });
   },
   deleteUser: async (userId: string) => {
      return prisma.user.delete({ where: { uuid: userId } });
   },
};
