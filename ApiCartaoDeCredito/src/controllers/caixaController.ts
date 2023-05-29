import { Request, Response } from "express";

import { Caixa } from "../model/caixaModel";

export const cartoes = async(req:Request, res: Response)=>{
    let cartoes = await Caixa.findAll()

    res.json(cartoes)
}

export const cartao = async(req:Request, res: Response)=>{
    let { id, nameDoTitular, numero, CVV, dataDeValidade } = req.body

    if(Caixa){
        await Caixa.findAll({where:{id:id}})

        if(Caixa === numero.CVV){
            res.status(400)
        }else{

            let newCartao = await Caixa.create({
                nameDoTitular, numero, CVV, dataDeValidade
            })

            res.json({id: newCartao.id, nameDoTitular, numero , CVV, dataDeValidade})
        }
    }

    
}

export const idCartao = async(req: Request, res: Response)=>{

}

export const deleteCartao = async(req: Request, res: Response)=>{

}

export const updateCartao = async(req: Request, res: Response)=>{

}