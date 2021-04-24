/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const Book = require("../models/bookModel");
const ObjectID = require('mongodb').ObjectID

module.exports = function (app) {
  app
    .route("/api/books")
    .get(async function (req, res) {
      const books = await Book.find({}).select("title _id commentcount");
      res.send(books);
    })

    .post(async function (req, res) {
      const title = req.body.title;
      if (title) {
        const book = new Book({
          title,
        });
        const savedBook = await book.save();
        res.send({ _id: savedBook._id, title: savedBook.title });
      } else {
        res.send("missing required field title");
      }
    })

    .delete(async function (req, res) {
      try {
        const deleted = await Book.deleteMany({});
        if (deleted) {
          res.send("complete delete successful");
        } else {
          res.send("could not delete");
        }
      } catch (e) {
        res.send("could not delete");
      }
    });

  app
    .route("/api/books/:id")
    .get(async function (req, res) {
      const bookid = new ObjectID(req.params.id);
      const book = await Book.findById(bookid).select(
        "title _id comments"
      );
      if (book) {
        res.send(book);
      } else {
        res.send("no book exists");
      }
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(async function (req, res) {
      const bookid = req.params.id;
      const comment = req.body.comment;
      const book = await Book.findById(bookid);
      if (book && comment) {
        book.comments.push(comment);
        book.commentcount = book.comments.length;
        const commentedBook = await book.save();
        res.send({
          _id: commentedBook._id,
          title: commentedBook.title,
          comments: commentedBook.comments,
        });
      } else if (!comment) {
        res.send("missing required field comment");
      } else {
        res.send("no book exists");
      }
      //json res format same as .get
    })

    .delete(async function (req, res) {
      const { id: bookid } = req.params;
      try {
        const deleted = await Book.findByIdAndDelete(bookid);
        if (deleted) {
          res.send("delete successful");
        } else {
          res.send("no book exists");
        }
      } catch (e) {
        res.send("could not delete");
      }
    });
};
