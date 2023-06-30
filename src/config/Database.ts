import mongoose from "mongoose"



const MONGO_URL = "mongodb://127.0.0.1:27017/ShopStoreDB"


 export const ShopDatabase = async()=>{
    try {
        const dbconnect = await mongoose.connect(MONGO_URL)
        console.log("Database is connected")
        
    } catch (error:any) {
        console.log(error.message)
        
    }
}