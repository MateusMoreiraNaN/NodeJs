import { Request, Response } from 'express'
import { Mongoose } from 'mongoose'
import User from '../models/User'

export const createLogin = async (req: Request, res: Response)=>{
    let { email, password } = req.body

    let newLogin = await User.create({
        email, password
    })

    res.json({id: newLogin.id, email, password })

    

    
}