import express from "express"
import { createShortUrl, redirectUrl } from "../controllers/url.contoller.js"

const router = express.Router()

router.post("/shorten", createShortUrl)
router.get("/:shortCode", redirectUrl )

export default router