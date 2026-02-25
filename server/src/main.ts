import express from 'express';
import dotenv from 'dotenv';
import router from './router/routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api',router);

app.listen(port, ()=> console.log(`Server are running! port ${port}`))