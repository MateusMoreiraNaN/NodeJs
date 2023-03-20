import { Request, Response } from 'express'
import { Mongoose } from 'mongoose'
import User from '../models/User'

export const ping = (req: Request, res: Response)=>{
    res.json({pong: true})
}