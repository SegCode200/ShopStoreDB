import express from "express"
import { appConfig } from "./app"
import { ShopDatabase } from "./config/Database"


const port:number = 3290

const app = express()

const server= async()=>{
    try {
        ShopDatabase() //initialize Database

        appConfig(app)  //configure middleware for server
        // Server is Listening on port
        app.listen(port,()=>{
            console.log("Listening to port", port)
            console.log("")
        })
        
    } catch (error:any) {
        console.log(error.message)
        
    }
}
server()