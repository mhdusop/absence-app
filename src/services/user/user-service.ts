import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {

   // Get all user
   getAllUsers: async () => {
      return prisma.user.findMany();
   },

   // Get by user id
   getUserById: async (userId: string) => {
      return prisma.user.findUnique({ where: { uuid: userId } });
   },

   // Create user
   createUser: async (userData: any) => {
      return prisma.user.create({ data: userData });
   },

   // Update user
   updateUser: async (userId: string, updatedUserData: any) => {
      return prisma.user.update({ where: { uuid: userId }, data: updatedUserData });
   },

   // Delete user
   deleteUser: async (userId: string) => {
      return prisma.user.delete({ where: { uuid: userId } });
   },

   //get user by email
   getUserByEmail: async (email: string) => {
      return prisma.user.findUnique({ where: { email } });
   },
};
