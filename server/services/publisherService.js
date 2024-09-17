const Publisher = require('../models/Publisher');

exports.createPublisher = async (publisherData) => {
  const publisher = new Publisher(publisherData);
  return await publisher.save();
};

exports.getAllPublishers = async () => {
  return await Publisher.find().populate('Books');
};

exports.getPublisherById = async (id) => {
  return await Publisher.findById(id);
};

exports.updatePublisher = async (id, publisherData) => {
  return await Publisher.findByIdAndUpdate(id, publisherData, { new: true });
};

exports.deletePublisher = async (id) => {
  return await Publisher.findByIdAndDelete(id);
};
