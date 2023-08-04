const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  Categories: [
    {
      id: {
        type: Number,
        required: true,
      },
      val: {
        type: String,
        required: true,
      },
    },
  ],
  Items: [
    {
      id: {
        type: Number,
        required: true,
      },
      val: {
        type: String,
        required: true,
      },
      Category: {
        type: String,
        required: true,
      },
    },
  ],
});

const Category = mongoose.model("CATEGORY", CategorySchema);

module.exports = Category;
