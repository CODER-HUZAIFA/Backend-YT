import express from "express"
import cookieParser from "cookie-parser"
import { registerHandle } from "./controllers/user.controllers.js"
import session from "express-session"
import User from "./models/user.models.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("C:/Users/HUZAIFA ANSARI/Documents/Backend Project/public"))
app.set("view engine", "ejs")

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "backend"
}))

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/register", registerHandle)

app.get("/profile", (req, res) => {
    res.render("profile", {
        Blogs: [1, 2, 3],
        profileName: User.findOne({username: "huzaifa"}),
        profileFollowers: 10000,
        profileDesc: "I am HUzaifa",
        profileOwner: false
    })

    console.log(req.body)
})

export { app }