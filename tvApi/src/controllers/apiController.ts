import { Request, Response } from "express"
import { join } from "path"
import { Tv } from "../models/tv"

export const filmAll = async (req: Request, res: Response)=>{
    let tv = await Tv.findAll()

    res.json({ tv })
} 

export const filmAdd = async (req: Request, res: Response)=>{
    let name: string = req.body.name
    let note: number = req.body.note

    if(name && note){
        let newTv = await Tv.create({
            name: req.body.name,
            note: req.body.note
        })

        res.status(201).json({item: newTv})
    }else{
        res.json({ error: 'Erro.' })
    }


} 

export const filmUpdate = async (req: Request, res: Response)=>{
    
} 

export const filmRemove = async (req: Request, res: Response)=>{
    
} 