import QRCode from 'qrcode';

// Function to generate QR code based on nim
export const generateQRCode = async (nim: string): Promise<string> => {
   try {
      // Generate QR code with the nim data
      const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify({ nim }));
      return qrCodeDataURL;
   } catch (error) {
      throw new Error('Error generating QR code');
   }
}
