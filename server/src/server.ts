import express, { Response } from 'express';
import cors from 'cors';    
import routes from './routes';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);


const port = process.env.PORT;
const host =  process.env.NODE_ENV!=='production' ? process.env.HOST : 'localhost';
app.listen(port,() =>{
    console.log(`Running server at http://${host}:${port}`);
})