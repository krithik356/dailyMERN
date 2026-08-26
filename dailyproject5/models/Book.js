const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["reading", "finished", "wishlist"],
      default: "wishlist"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Book", bookSchema);