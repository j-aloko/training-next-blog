import Post from "../../../../Models/Post";
import dbConnect from "./../../../../mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { postId },
  } = req;

  dbConnect();

  // Add comments
  if (method === "PUT") {
    try {
      const post = await Post.findById(postId);
      await post.updateOne({ $push: { comments: req.body } });
      res.status(200).json("Comment Posted Successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
