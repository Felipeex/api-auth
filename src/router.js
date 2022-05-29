import express from "express"
import cors from "cors"
const app = express()

app.use(cors())

app.use(express.json())

/* routers */
import auth from "./routers/auth/index.js"
app.use('/auth', auth)

app.listen(4000, () => console.log('Api rodando com sucesso! 🚀'))