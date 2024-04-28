import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import userRoutes from "./routes/user.router.js"
import staticRouter from './routes/staticRoutes.js'
import { profileCheck, userData } from "./middleware/user.middleware.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static("C:/Users/HUZAIFA ANSARI/Documents/Backend Project/public"))
app.set("view engine", "ejs")

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "backend"
}))

app.use("/profile", userRoutes)
app.use("/", staticRouter)



export { app }