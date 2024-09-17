const Publisher = require('../models/Publisher');


exports.getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find().populate('books');
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getPublisherById = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id).populate('books');
    if (!publisher) return res.status(404).json({ message: 'Publisher not found' });
    res.json(publisher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createPublisher = async (req, res) => {
  try {
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.status(201).json(publisher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updatePublisher = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publisher) return res.status(404).json({ message: 'Publisher not found' });
    res.json(publisher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deletePublisher = async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndDelete(req.params.id);
    if (!publisher) return res.status(404).json({ message: 'Publisher not found' });
    res.json({ message: 'Publisher deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
