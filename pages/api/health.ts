import { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  status: string;
  message: string;
}

function healthHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    status: "success",
    message: "system is healthy",
  });
}

export default healthHandler;
