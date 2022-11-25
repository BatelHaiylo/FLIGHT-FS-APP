import { Router } from "express";
import {getFlights, getBookById, addFlightToDB, updateFlight, deleteFlight } from '../contollers/flights-ctrl.js';

export const flightsRouter = Router()

flightsRouter.get('/',getFlights);
flightsRouter.get('/byId/:id',getBookById);
flightsRouter.post('/add',addFlightToDB);
flightsRouter.put('/update/:id',updateFlight);
flightsRouter.delete('/delete/:id',deleteFlight);