const Book = require('../models/Book');

exports.createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

exports.getAllBooks = async () => {
  return await Book.find().populate('Author Publisher Category');
};

exports.getBookById = async (id) => {
  return await Book.findById(id).populate('Author Publisher Category');
};

exports.updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

exports.deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};
