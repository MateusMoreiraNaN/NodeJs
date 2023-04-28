import { Request, Response} from "express";
import { Category } from "../models/category";

export const admin = async (req: Request, res: Response)=>{

    res.render('admin/categories/new')
}

export const save = async (req: Request, res: Response)=>{
    let { name } = req.body

    if(name){
        let newCategory = new Category()

        newCategory.name = name

        await newCategory.save()
    }else{
        res.redirect('/admin/categories/new')
    }

    res.redirect("/admin/categories/index")
}