import { NextApiRequest, NextApiResponse } from "next";
import Project from "../../../lib/mongo-db/models/project";
import connectMongoDB from "../../../lib/mongo-db/mongo-connect";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      try {
        await connectMongoDB();
        const projects = await Project.find({});
        res.status(200).json({
          status: "success",
          data: projects,
        });
      } catch (error: any) {
        res.status(400).json({
          status: "error",
          message: error.message,
        });
      }
      break;
  }
}

export default handler;
