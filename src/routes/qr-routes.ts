import express from 'express';
import { generateQRCode } from '../controller/qr-controller';

export const qrRouter = express.Router();

qrRouter.post('/generate', generateQRCode);
