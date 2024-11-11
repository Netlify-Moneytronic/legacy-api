import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const levels = getStore('data');
    const latest = await levels.get("latest");
    return new Response(latest);
};