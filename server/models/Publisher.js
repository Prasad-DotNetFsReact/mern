const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  publisherId: {
    type: Number,
    required: true,
    unique: true
  },
  publisherName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: null
  },
  contactNumber: {
    type: String,
    default: null
  },
  country: {
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

module.exports = mongoose.model('Publisher', publisherSchema);
