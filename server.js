const express = require('express');
const cors = require('cors');

const serverapp = express();

var corsOptions = {
    origin: "http://localhost:5000"
}

serverapp.use(cors(corsOptions));

serverapp.use(express.json());

//route
serverapp.get("/",(req,res) => {
    res.json({message:'your server is active here'});
})

const PORT = process.env.PORT || 5000;

serverapp.listen(PORT, () => {
    console.log('server is active here')
})