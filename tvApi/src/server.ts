import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRouter from './router/ApiRouter'

dotenv.config()

const server = express()

server.use(apiRouter);

server.use(express.urlencoded({extended: true}));

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);