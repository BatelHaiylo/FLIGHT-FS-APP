import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
// import  './DB/db.js'
import mongoose from "mongoose";

const DBConnection = process.env.LOCAL_CONNECTION_STRING;

mongoose
  .connect(DBConnection)
  .then(() => console.log(`Server running on port: ${process.env.PORT}`))

const PORT = process.env.PORT || 3001;

import {flightsRouter} from './routers/flights-router.js';
import {airlinesRouter} from './routers/airlines-router.js';
import {usersRouter} from './routers/users-router.js';
import {statesRouter} from './routers/states-router.js';

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/flights',flightsRouter);
app.use('/airlines', airlinesRouter);
app.use('/states',statesRouter)
app.use('/users',usersRouter)


app.get('/', (req,res)=>{ 
    res.send("server is working")
});

app.listen(PORT, ()=>{
    console.log(process.env.LOCAL_CONNECTION_STRING)
    console.log(`server is listening in port ${PORT}`)
});