import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const levels = getStore('data');
    const latest = await levels.get("latest");
    // set a delay of 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    return new Response(latest);
};