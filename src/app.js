import express from "express"
import cookieParser from "cookie-parser"
import { registerHandle, userDataHandling } from "./controllers/user.controllers.js"
import session from "express-session"
import passport from "passport"
import { initializingPassport, isAuthenticated } from "./passport.config.js"

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
app.use(passport.initialize())
app.use(passport.session())
initializingPassport(passport)

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/"
}))

app.post("/register", registerHandle)



app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile", {userData: userDataHandling})

    console.log(req.body)
})

export { app }