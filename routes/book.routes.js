const express = require("express");
const app = express();

const bookRoute = express.Router();
let Book = require("../model/Book");


// Get All Book
bookRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = bookRoute;

