import express from 'express';
import { qrRouter } from './routes/qr-routes';
import { userRouter } from './routes/user/user-routes';

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Router
app.use('/api', userRouter);
app.use('/api/qr', qrRouter);

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
