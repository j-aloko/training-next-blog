const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    img: { type: String, default: "" },
    categories: { type: Array, default: [] },
    comments: { type: Array, default: [] },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
