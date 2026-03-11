import express from "express"
import urlRoutes from "./routes/url.route.js"
import cors from "cors"


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use("/", urlRoutes)

export default app