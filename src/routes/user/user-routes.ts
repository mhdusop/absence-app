import express from 'express';
import { getAllUsers } from '../../controller/user/user-read-controller';

export const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
