import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

// Get all users

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users = await userService.getAllUsers();
      res.json(users);
   } catch (error) {
      console.error('Error get all user:', error);
      throw error;
   }
}
