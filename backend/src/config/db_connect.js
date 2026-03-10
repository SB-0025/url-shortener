import mongoose from "mongoose";

export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "url_shortener"
        })
        console.log("Db is successfully connected")
    }catch(err){
        console.log("Db is not Connected", err)
    }
}
