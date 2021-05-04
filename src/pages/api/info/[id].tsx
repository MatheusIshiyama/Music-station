import ytdl from "ytdl-core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "GET") return;

    const { id } = request.query;

    const idIsValid = ytdl.validateID(String(id));

    if (!idIsValid) return response.status(400).json({ message: "Invalid id" });

    const videoInfo = await ytdl.getInfo(String(id));

    const { videoDetails } = videoInfo;

    const result = {
        title: videoDetails.title,
        thumbnail: videoDetails.thumbnails.pop().url,
    };

    return response.status(200).json(result);
}
