import Post from "../../../../models/Post";
import dbConnect from "../../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;

  // Connect to database
  await dbConnect();

  if (method === "GET") {
    try {
      let query = Post.find({}).sort({ createdAt: -1 });

      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 10;
      const total = await Post.countDocuments();

      const pages = Math.ceil(total / pageSize);

      if (page > pages) {
        return res.status(404).json({
          status: "fail",
          message: "No page found",
        });
      }

      const result = await query;

      res.status(200).json({
        status: "success",
        count: result.length,
        page,
        pages,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Server Error" });
    }
  }
};
