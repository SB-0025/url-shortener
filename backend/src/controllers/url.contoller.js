import { Url } from "../models/url.models.js";
import generateShortCode from "../utils/generateShortCode.js";

 export const createShortUrl = async (req, res) => {
  try {

    const { url } = req.body;
    const shortCode = generateShortCode();

    await Url.create({
        shortCode,
        url
    })

    res.json({
      message: "Data inserted successfully",
      success: true,
      shortUrl: `http://localhost:4000/${shortCode}`,
    });

    
  } catch (err) {
    res.json({
      message: "Data not inserted",
      success: false,
    });
  }
};


export const redirectUrl = async(req, res) => {
    try {

        const {shortCode} = req.params
        const result = await Url.findOne({shortCode})

        if(!result){
            return res.status(404).json({
                message: "Not Found",
                success: false
            })
        }

       res.redirect(result.url)

    } catch(error){
    res.status(500).json({
      message: "Server error"
    })
    } 
}

