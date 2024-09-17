const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  authorId: {
    type: Number,
    required: true,
    unique: true
  },
  authorName: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: null
  },
  authorInformation: {
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
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    default: null
  }]
});

module.exports = mongoose.model('Author', authorSchema);
