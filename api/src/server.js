const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const router = require('./routes');

const app = express()

const port = 3001

app.use(bodyparser.urlencoded({extended: true,}));  
app.use(express.json())
app.use(cors());
app.use(router)


app.listen(port,()=>{
    console.log(`servidor rodando na porta: ${port}`)
})

