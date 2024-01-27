import { Request, Response } from 'express';
import qrcode from 'qrcode';

export const generateQRCode = async (req: Request, res: Response): Promise<void> => {
   const data = req.body;

   if (!data || typeof data !== 'string') {
      res.status(400).json({ error: 'Invalid data parameter' });
      return;
   }

   try {
      const qrCodeDataURL = await qrcode.toDataURL(data);
      res.status(200).json({ qrCodeDataURL });
   } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Internal server error' });
   }
};
