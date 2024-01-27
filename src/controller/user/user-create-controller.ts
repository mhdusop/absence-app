import { Request, Response } from 'express';
import { userService } from '../../services/user/user-service';

export const createUser = async (req: Request, res: Response): Promise<void> => {
   const userData = req.body;

   try {
      const newUser = await userService.createUser(userData);

      res.status(201).send({
         status: 201,
         message: "Created",
         data: newUser
      });
   } catch (error: any) {
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
         res.status(403).send({
            status: 403,
            message: 'Email is already in use.'
         });
      }
      else {
         console.error('Error creating user:', error);
         throw error;
      }
   }
};