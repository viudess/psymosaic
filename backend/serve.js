//modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//routes
const authRouter = require("./routes/auth-routes");
//middlewares - travas do meio de projeto e acesso
//config
const dbName = "psymosaicUsers";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);

//atrelar as rotas ao express
app.get("/", (req, res)=> {
    //primeira rota de teste
    res.json({message : "Rota de teste será trocada!!!"});
});
//escutando a porta
app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
});

//conexão mongodb
mongoose.connect(
    `mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser : true,
    UseUnifiedTopology : true,
    serverSelectionTimeoutMS : 10000
    });

