import express from 'express';
import { getAllUsers } from '../../controller/user/user-read-controller';
import { createUser } from '../../controller/user/user-create-controller';

export const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/user/post', createUser);
