import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

export const createUser = async (req: Request, res: Response): Promise<void> => {
   const userData = req.body;

   // Validation: Check if required fields are present and have valid values
   if (!userData || !userData.email || !userData.password || !userData.username) {
      res.status(400).json({ error: 'Username, email and password are required.' });
      return;
   }

   try {
      // Additional validation in the service layer
      const existingUser = await userService.getUserByEmail(userData.email);
      if (existingUser) {
         res.status(400).json({ error: 'Email is already in use.' });
         return;
      }
      const newUser = await userService.createUser(userData);
      res.status(201).json({
         status: 201,
         message: "Created user successfully!",
         data: newUser
      });
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};