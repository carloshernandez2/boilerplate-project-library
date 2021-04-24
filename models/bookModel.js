const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    comments: [{ type: String, required: true }],
    title: { type: String, required: true},
    commentcount: { type: Number, required: true, default: 0 },
  }
);
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
