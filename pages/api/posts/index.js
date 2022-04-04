import Post from "../../../Models/Post";
import dbConnect from "./../../../mongo";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    const newPost = new Post(req.body);
    try {
      const post = await newPost.save();
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
