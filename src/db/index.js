import mongoose from "mongoose"

const connectDB =  async () => {
    try {
        const DBConnection = await mongoose.connect(`mongodb+srv://Huzaifa:Huzaifa@cluster0.dk5otlp.mongodb.net/Youtube`)
        console.log(`\n DataBase is connected at: ${DBConnection.connection.host}`)
    } catch (error) {
        console.log(`Error in connection DB: ${error}`)
    }
}

export default connectDB