import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookie = req.cookies[process.env.COOKIE_NAME || ""];

  if (!cookie) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  const user = await validateJWT(cookie);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
}
