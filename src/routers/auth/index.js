import express from "express"
const router = express.Router()

import { AuthInformationsValidate } from "../../controllers/signup.js"

router.post('/signup', AuthInformationsValidate, (req, res) => {
    
})

export default router