// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  owner: string;
  github: string;
  instagram: string;
  username: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    owner: "Jeldi Kamal Kumar",
    github: "jeldikk",
    instagram: "iamjeldikk",
    username: "jeldikk",
  });
}
