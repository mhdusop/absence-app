import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users = await userService.getAllUsers();
      res.status(200).json({
         status: 200,
         message: "Success",
         data: users
      });
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error('Error get all user:', error);
      throw error;
   }
}

// Get User by uuid
export const getUserById = async (req: Request, res: Response): Promise<void> => {
   const userId = req.params.id;

   try {
      const user = await userService.getUserById(userId);
      if (user) {
         res.status(200).json({
            status: 200,
            message: "Success",
            data: user
         });
      } else {
         res.status(404).json({ error: 'User not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};