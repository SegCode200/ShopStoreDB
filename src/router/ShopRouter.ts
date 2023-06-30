import { Router } from "express";
import { AddItems, BuyingItems, DeleteItems, GetAllItems, UpdateItems } from "../Controller/ShopController";


const Shoproute = Router()

// Getting all items
Shoproute.get("/getall", GetAllItems)

// AddItems 
Shoproute.post("/add", AddItems)

// UpdateItems
Shoproute.patch("/update/:ShopId", UpdateItems)

// DeleteItems
Shoproute.delete("/delete/:ShopId", DeleteItems)

// BuyItems
Shoproute.get("/buy/:ShopId", BuyingItems)

export default Shoproute;