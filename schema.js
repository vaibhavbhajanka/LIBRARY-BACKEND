const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
  bookName: String,
  issuerName: String,
  date: String,
});

module.exports = mongoose.model('Book', bookSchema,"SL-Lab-Library");