import "dotenv/config"
import express from "express";
import cors from "cors";
import notFound from "./src/middlewares/not-found.js"

// Si quiero proteger todas las rutas de producto:
// import { verifyToken } from "./src/middlewares/verify-token.js";

const app = express()
app.use(express.json())

/*
app.use((req,res, next) => {
    //res.json({message: 'API en mantenimiento'})
    console.log(req.method)
    next()
})
*/
app.get('/',(req,res) =>{
  res.send({message: "¡Welcome to API Rest!"})
})

import authRouter from "./src/routes/auth.router.js"
app.use('/api/auth', authRouter)

import productsRouter from "./src/routes/products.router.js"
import { verifyToken } from "./src/middlewares/verify-token.js";
app.use('/api',productsRouter)
// Si quiero proteger todas las rutas de producto hago:
// app.use('/api', verifyToken, productsRouter)



app.use(notFound)
const PORT = process.env.PORT || 4001

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));

