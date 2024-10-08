import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import userRoutes from "./routes/user.router.js"
import staticRouter from './routes/staticRoutes.js'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { profileCheck, userData } from "./middleware/user.middleware.js"
const app = express()

import connectDB from "./db/index.js"
import 'dotenv/config'


connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log("App is listening on port 3000")
    })
})
.catch((error) => {
    console.log("Error in DB Connection")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))
app.set("view engine", "ejs")
console.log(__dirname)
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "backend"
}))

app.use("/profile", userRoutes)
app.use("/", staticRouter)



export { app }