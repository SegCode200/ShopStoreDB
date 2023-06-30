import mongoose,{Schema} from "mongoose";
import { iShop } from "../interface/Interface";



interface Shop extends iShop, mongoose.Document{}

const ShopSchema:Schema<iShop> = new mongoose.Schema({
    Category:{
        type:String
    },
    expiryDate:{
        type:String,
    },
    price:{
        type:Number
    }, 
    GoodsName:{
        type:String,
    },
    popular:{
        type:Boolean,
    }
},{timestamps:true})

const ShopModel = mongoose.model<Shop>("Shop", ShopSchema)

export default ShopModel