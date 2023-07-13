import express from "express";
import { router } from "./api/src/routes";
const app = express()

app.use(router)

app.listen(3001,()=>{
    console.log("Server Listen to ", 3001);
})
