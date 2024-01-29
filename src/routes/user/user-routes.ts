import express from 'express';
import { getAllUsers, getUserById } from '../../controller/user/user-read-controller';
import { createUser } from '../../controller/user/user-create-controller';
import { updateUser } from '../../controller/user/user-update-controller';
import { deleteUser } from '../../controller/user/user-delete-controller';

export const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUserById);
userRouter.post('/user/post', createUser);
userRouter.put('/user/update/:id', updateUser);
userRouter.delete('/user/delete/:id', deleteUser)
