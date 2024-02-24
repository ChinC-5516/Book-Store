const express = require("express");
const booksController = require("../controllers/book-controller")
const router = express.Router();
const Book = require("../model/book")
router.get("/",booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports = router;