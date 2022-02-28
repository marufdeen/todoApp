const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String, 
  category: String,
  done: {
    type: String,
    enum: ['completed', 'pending'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model("todos", todoSchema);
