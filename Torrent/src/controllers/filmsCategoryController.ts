import { Request, Response} from "express";

export const admin = async (req: Request, res: Response)=>{

    res.render('admin/categories/new')
}