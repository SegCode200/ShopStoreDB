import express, { Application } from 'express';
import shop from "./router/ShopRouter"


 export const appConfig = (app:Application)=>{
    try {
        // Middleware Configuration
        app.use(express.json())

        // Route Configuration
        .use("/api/shop", shop)
        
    } catch (error:any) {
        console.log(error.message)
        
    }
}