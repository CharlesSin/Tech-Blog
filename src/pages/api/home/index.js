import Post from "../../../../models/Post";
import dbConnect from "../../../../utils/dbConnect";

export default async (req, res) => {
  const { method, url } = req;

  // Connect to database
  await dbConnect();

  if (method === "GET") {
    try {
      const query = await Post.find({}).sort({ createdAt: -1 }).limit(48).exec();

      const result = await query;

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Server Error" });
    }
  }
};
