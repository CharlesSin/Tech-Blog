const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  title: { type: String, default: "Title string" },
  desc: { type: String, default: "Description string" },
  domain: { type: String, default: "example.com" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Customer || mongoose.model("bookmark", bookmarkSchema);
