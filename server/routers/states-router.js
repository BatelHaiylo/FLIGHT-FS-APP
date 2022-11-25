import { Router } from "express";
import {getStates, getStateById, addStateToDB, updateState, deleteState } from '../contollers/states-ctrl.js';

export const statesRouter = Router()

statesRouter.get('/',getStates);
statesRouter.get('/byId/:id',getStateById);
statesRouter.post('/add',addStateToDB);
statesRouter.put('/update/:id',updateState);
statesRouter.delete('/delete/:id',deleteState);