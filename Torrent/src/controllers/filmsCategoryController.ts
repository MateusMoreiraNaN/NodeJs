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

export const adminCategory = async (req: Request, res: Response) =>{
    let categories = await Category.findAll()
    if(categories){
        res.render("admin/categories/index", {categories:categories})
    }
}

export const deleteId = async (req: Request, res: Response)=>{
    let { id } = req.body

    if(id){
        if(!isNaN(id)){
            await Category.destroy({
                where:{
                    id: id
                }
            })
            res.redirect("/admin/categories/index")
        }else{
            res.redirect("/admin/categories/index")
        }
    }else{
        res.redirect("/admin/categories/index")
    }
}

export const edit = async (req: Request, res: Response)=>{
    let { id } = req.params
    
    let categoria = await Category.findByPk(id)
    if(categoria != undefined){
        if(req.body.name){
            categoria.name = req.body.name
        }

        res.render("admin/categories/edit", {categoria:categoria})
    }else{
        res.redirect("/admin/categories/index")
    }
}

