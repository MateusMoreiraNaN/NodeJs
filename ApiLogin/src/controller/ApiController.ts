import { Request, Response } from 'express'
import { Mongoose } from 'mongoose'
import User from '../models/User'

export const createLogin = async (req: Request, res: Response)=>{
    let { email, password } = req.body

    if(email){
        let newLogin = new User()

        newLogin.email = email

        if(password){
            newLogin.password = password
        }

        await newLogin.save()
    }



    res.json({email, password })

    

    
}