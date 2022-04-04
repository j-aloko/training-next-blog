import Post from "../../../Models/Post";
import dbConnect from "./../../../mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { postId },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const post = await Post.findById(postId);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
