import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import RouterFilms from './routes/films'


dotenv.config()

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(RouterFilms)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT)

