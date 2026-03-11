import express from "express"
import urlRoutes from "./routes/url.route.js"
import cors from "cors"


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(
    {
        origin: "https://url-shortener-blond-delta.vercel.app"
    }
))


app.use("/", urlRoutes)

export default app