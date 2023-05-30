import mongoose from "mongoose"

//connects to database 

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

