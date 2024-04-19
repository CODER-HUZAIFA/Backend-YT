import express from "express"
import path from "path"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("C:\Users\HUZAIFA ANSARI\Documents\Backend Project\public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
});

export { app }