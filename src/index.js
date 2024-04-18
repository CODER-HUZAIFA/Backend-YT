import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})
connectDB()
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})