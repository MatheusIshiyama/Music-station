import ytdl from "ytdl-core";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "GET") return;

    const { id } = request.query;

    const idIsValid = ytdl.validateID(String(id));

    if (!idIsValid) return response.status(400).json({ message: "Invalid id" });

    ytdl(String(id), { quality: "highest", filter: "videoandaudio" }).pipe(response);
}
