import { Request, Response } from 'express'
import { Mongoose } from 'mongoose'
import User from '../models/User'
import { emit } from 'process'

export const createLogin = async (req: Request, res: Response)=>{
    let { email, password } = req.body

    let newLogin = await User.create({
        email, password
    })

    res.json({id: newLogin.id, email, password })

}

export const all = async (req: Request, res: Response)=>{
    let emails = await User.find({})

    res.json({ emails })

}

export const update = async (req: Request, res: Response)=>{
    let id = req.params.id
    let { email, password } = req.body

    let newUpdate = await User.findOne({_id: id})
    if(newUpdate){
        if(email && password){
            newUpdate.email = email
            newUpdate.password = password

            await newUpdate.save()
        }


        res.json({item: newUpdate})
    }else{

        res.json({ error: 'error.' })
    }

}

export const remove = async (req: Request, res: Response)=>{
    let id = req.params.id

    let removeId = await User.findOne({_id: id})

    if(removeId){
        await removeId.deleteOne()

        res.json({})
    }else{

        res.json({ error: 'error.' })
    }

    
}