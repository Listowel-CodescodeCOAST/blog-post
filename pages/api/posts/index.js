import dbConnect from "../../../libs/db.Connect";
import Post from "../../../models/post.model";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const post = await Post.find({});
    res.status(200).json(post);
  } else if (req.method === "POST") {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed. Only GET and POST is allowed" });
  }
}
