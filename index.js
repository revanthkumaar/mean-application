let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser");

  //connect to db


  //import the routes that talk to the db 

  const bookRoute = require("./routes/book.routes");

    // create an express application
const serverapp = express();

var corsOptions = {
  origin: "http://localhost:5000",
};

serverapp.use(cors(corsOptions));

serverapp.use(express.json());

//route
serverapp.get("/", (req, res) => {
  res.json({ message: "your server is active here" });
});

const PORT = process.env.PORT || 5000;

serverapp.listen(PORT, () => {
  console.log("server is active here");
});
