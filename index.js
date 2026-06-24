import express from "express";
import notFound from "./src/middlewares/not-found.js"

const app = express()

app.use((req,res, next) => {
    //res.json({message: 'Soy Middleware'})
    console.log(req.method)
    next()
})

app.get('/',(req,res) =>{
  res.send({message: "¡Welcome to API Rest!"})

})



app.use(notFound)
const PORT = 3000   

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));

