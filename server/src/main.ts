import express from 'express';
import dotenv from 'dotenv';
import router from './router/routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin:["http://localhost:5173", process.env.VITE_FRONTEND_CALLBACK_URL!],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router);

app.listen(port, ()=> console.log(`Server are running! port ${port}`))