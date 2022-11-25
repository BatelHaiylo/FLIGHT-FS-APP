import { Router } from "express";
import {getUsers, getUserById, addUserToDB, updateUser, deleteUser } from '../contollers/users-ctrl.js';

export const usersRouter = Router()

usersRouter.get('/',getUsers);
usersRouter.get('/byId/:id',getUserById);
usersRouter.post('/add',addUserToDB);
usersRouter.put('/update/:id',updateUser);
usersRouter.delete('/delete/:id',deleteUser);