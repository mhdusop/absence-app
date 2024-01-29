import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

export const updateUser = async (req: Request, res: Response): Promise<void> => {
   const userId = req.params.id;
   const updatedUserData = req.body;

   // Validation: Check if required fields are present and have valid values
   if (!updatedUserData || (!updatedUserData.email && !updatedUserData.password)) {
      res.status(400).json({ error: 'Email or password is required for updating a user.' });
      return;
   }

   try {
      // Additional validation in the service layer
      const existingUser = await userService.getUserByEmail(updatedUserData.email);
      if (existingUser && existingUser.uuid !== userId) {
         res.status(400).json({ error: 'Email is already in use.' });
         return;
      }

      const updatedUser = await userService.updateUser(userId, updatedUserData);
      if (updatedUser) {
         res.status(200).json({
            status: 200,
            message: "Update user successfully",
            data: updatedUser
         });
      } else {
         res.status(404).json({ error: 'User not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};
