import { app } from "./app.js";
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