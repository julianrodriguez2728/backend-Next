import { Router, Request, Response } from 'express';
import axios from "axios"

export const getProducts = async(req: Request,res: Response)=>{
    try {
        const resp = await axios.get("https://apinext-98lb.vercel.app")
        res.status(200).json(resp.data)
    } 
    catch (error) {
        res.status(404).json({error})
    }
}

export const getProductById = async(req: Request,res: Response)=>{
    const {id} = req.params;
    try {
        const resp = await axios.get(`https://apinext-98lb.vercel.app/product/${id}`)
        res.status(200).json(resp.data)
    } catch (error) {
        res.status(404).json({error})
    }
}