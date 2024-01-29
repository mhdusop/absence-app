import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
   const userId = req.params.id;

   try {
      const deletedUser = await userService.deleteUser(userId);

      if (deletedUser) {
         res.status(200).send({
            status: 200,
            message: "User deleted successfully",
         });
      }
      else {
         res.status(404).json({ error: 'User not found' });
      }

   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error('Error creating user:', error);
      throw error;
   }
};