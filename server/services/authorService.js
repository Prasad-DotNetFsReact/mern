const Author = require('../models/Author');

exports.createAuthor = async (authorData) => {
  const author = new Author(authorData);
  return await author.save();
};

exports.getAllAuthors = async () => {
  return await Author.find().populate('Books');
};

exports.getAuthorById = async (id) => {
  return await Author.findById(id);
};

exports.updateAuthor = async (id, authorData) => {
  return await Author.findByIdAndUpdate(id, authorData, { new: true });
};

exports.deleteAuthor = async (id) => {
  return await Author.findByIdAndDelete(id);
};
