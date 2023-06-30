import { Request,Response } from "express";
import { iShop } from "../interface/Interface";
import ShopModel from "../model/ShopModel";





export const GetAllItems = async(req:Request, res:Response) =>{
    try {
        const allItems = await ShopModel.find()
        return res.status(200).json({
            message:"List of all items",
            data: allItems
        })
        
    } catch (error:any) {
        return res.status(500).json(error.message)
        
    }
}

export const AddItems = async (req: Request<{},{},iShop>, res: Response) => {
    try {
        const {GoodsName,Category,expiryDate,popular,price} = req.body
        const items = await ShopModel.create({
            GoodsName,Category,expiryDate,popular,price

        })
        return res.status(201).json({
            message: "Items Added to Store",
            data: items
        })
        
    } catch (error:any) {
        return res.status(500).json(error.message)
        
    }
}

export const UpdateItems = async (req: Request, res: Response)=>{
    try {
        const {price,popular} = req.body
        const Update = await ShopModel.findByIdAndUpdate(req.params.ShopId, {price,popular}, {new: true})
        return res.status(201).json({
            message: "Item Updated",
            data: Update
        })
        
    } catch (error:any) {
        return res.status(500).json(error.message);
        
    }

}

export const DeleteItems = async(req: Request, res: Response)=>{
    try {
        const items = await ShopModel.findByIdAndDelete(req.params.ShopId)
        return res.status(200).json({
            message: "Item deleted successfully",
            data: items
        })
        
    } catch (error:any) {
        return res.status(500).json(error.message);
        
    }
}

export const BuyingItems = async (req: Request, res: Response)=>{
    try {
        const buy = await ShopModel.findById(req.params.ShopId)
        return res.status(200).json({
            message: "Purchased",
            data: buy
        })
        
    } catch (error:any) {
        return res.status(500).json(error.message);
        
    }
}