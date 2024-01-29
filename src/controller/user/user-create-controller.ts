import { Request, Response } from 'express';
import { generateQRCode } from '../qr-code/generate-qr-code';
import { userService } from '../../services/user/user-service';

export const createUser = async (req: Request, res: Response): Promise<void> => {
   const { email, password, username, nim, address, phone } = req.body;

   // Validation: Check if required fields are present and have valid values
   if (!email || !password || !username) {
      res.status(400).json({ error: 'Username, email and password are required.' });
      return;
   }

   try {
      // Additional validation in the service layer
      const existingUser = await userService.getUserByEmail(email);
      if (existingUser) {
         res.status(400).json({ error: 'Email is already in use.' });
         return;
      }

      // Generate QR code from nim
      const qrCodeURL = await generateQRCode(nim);
      const base64Data = qrCodeURL.replace(/^data:image\/png;base64,/, '');

      const newUser = await userService.createUser({ email, password, username, nim, address, phone, qr_code: base64Data });

      res.status(201).json({
         status: 201,
         message: "Created user successfully!",
         data: {
            ...newUser,
         }
      });

   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(error);
      throw error;

   }
};

