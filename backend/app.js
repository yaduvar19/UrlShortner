import express from 'express'
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from './src/config/mongoDB.config.js'
import urlSchema from './src/models/shortUrl.models.js'
dotenv.config("./.env")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post("/api/create",(req,res)=>{
    const {url} = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new urlSchema({
        full_url:url,
        short_url:shortUrl
    })
    newUrl.save();
    res.send(nanoid(7));

})
app.listen(3000,()=>{
    connectDB()
console.log("listen here http://localhost:3000");
})