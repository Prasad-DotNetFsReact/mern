const Category = require('../models/Category');

exports.createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  return await category.save();
};

exports.getAllCategories = async () => {
  return await Category.find().populate('Books');
};

exports.getCategoryById = async (id) => {
  return await Category.findById(id);
};

exports.updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

exports.deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};
