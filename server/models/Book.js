const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookId: {
    type: Number,
    required: true,
    unique: true
  },
  bookName: {
    type: String,
    required: [true, "Book Name is Mandatory"]
  },
  description: {
    type: String,
    default: null
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  edition: {
    type: Number,
    default: 1
  },
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  pageCount: {
    type: Number,
    default: 0
  },
  thumbnail: {
    type: String,
    default: null
  },
  createdBy: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: Number,
    default: null
  },
  modifiedOn: {
    type: Date,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  }
});


module.exports = mongoose.model('Book', bookSchema);

