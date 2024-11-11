import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {
    if (req.method === 'POST') {
        const data = await req.json();
        const blobData = getStore('data');
        await blobData.setJSON("latest", data);
        return new Response(null, { status: 200 });
    }
    return new Response("Method Not Allowed");
};