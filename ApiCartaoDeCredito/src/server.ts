import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import api from './routes/apiCartao'


dotenv.config()

const server = express()

server.use(express.json())

server.use(api)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT)

export default server