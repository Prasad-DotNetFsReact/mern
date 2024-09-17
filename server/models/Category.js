const mongoose = require('mongoose');

// Define the Category Schema
const categorySchema = new mongoose.Schema({
  categoryId: {
    type: Number,
    required: true,
    unique: true
  },
  categoryName: {
    type: String,
    required: true
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

// Export the Category model
module.exports = mongoose.model('Category', categorySchema);
