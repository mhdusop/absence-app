import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import { userRouter } from './routes/user/user-routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Router
app.use('/api', userRouter);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
