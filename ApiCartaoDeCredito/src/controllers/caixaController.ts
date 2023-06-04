import { Request, Response } from "express";

import { Caixa } from "../model/caixaModel";

export const cartoes = async(req:Request, res: Response)=>{
    let cartoes = await Caixa.findAll()

    res.json(cartoes)
}

export const cartao = async(req:Request, res: Response)=>{
    let { id, nameDoTitular, numero, CVV, dataDeValidade } = req.body

    if(Caixa){
        await Caixa.findOne({where:{id:id}})

        if(numero === id.numero){
            res.sendStatus(400)
        }else{

            let newCartao = await Caixa.create({
                nameDoTitular, numero, CVV, dataDeValidade
            })

            res.json({id: newCartao.id, nameDoTitular, numero , CVV, dataDeValidade})
        }
    }

    
}

export const idCartao = async(req: Request, res: Response)=>{
    let id = req.params.id

    if(isNaN(parseInt(id))){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)

        let cartao = await Caixa.findOne({where:{id: id}})

        if(cartao != undefined){
            res.json({cartao})
        }else{
            res.sendStatus(404)
        }
    }
}

export const deleteCartao = async(req: Request, res: Response)=>{
    let { id } = req.params

    if(isNaN(parseInt(req.params.id))){
        res.sendStatus(400)
    }else{
        await Caixa.destroy({
            where:{id}
        })

        res.json({})
    }
}

export const updateCartao = async(req: Request, res: Response)=>{
    let {id} = req.params
    let{ nameDoTitular, numero, CVV, dataDeValidade  } = req.body

    if(isNaN(parseInt(req.params.id))){
        res.sendStatus(400)
    }else{
        let mudarSeusDados = await Caixa.findByPk(id)

        if(mudarSeusDados != undefined){
            mudarSeusDados.nameDoTitular = nameDoTitular
            mudarSeusDados.numero = numero
            mudarSeusDados.CVV = CVV
            mudarSeusDados.dataDeValidade = dataDeValidade

            await mudarSeusDados.save()

            res.json({mudarSeusDados})
        }
    }
}