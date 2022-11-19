import express from 'express';
const app = express();
// import bodyParser from 'body-parser';
import  './DB/db.js'
import cors from 'cors';

const PORT = process.env.PORT || 3001;

// app.use(express.json({extended: true}));
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json({limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{ 
    res.send("server is working")
});

app.listen(PORT, ()=>{
    console.log(`server is listening in port ${PORT}`)
});