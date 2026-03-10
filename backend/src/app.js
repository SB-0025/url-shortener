import express from "express"
import urlRoutes from "./routes/url.route.js"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", urlRoutes)

export default app