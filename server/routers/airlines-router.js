import { Router } from "express";
import {getAirlines, getAirlineById, addAirlineToDB, updateAirline, deleteAirline } from '../contollers/airlines-ctrl.js';

export const airlinesRouter = Router()

airlinesRouter.get('/',getAirlines);
airlinesRouter.get('/byId/:id',getAirlineById);
airlinesRouter.post('/add',addAirlineToDB);
airlinesRouter.put('/update/:id',updateAirline);
airlinesRouter.delete('/delete/:id',deleteAirline);