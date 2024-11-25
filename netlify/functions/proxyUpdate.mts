import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const url = "https://legacy-api.netlify.app/.netlify/functions/dataUpdate";
    if (req.method === 'POST') {
        const data = await req.json();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return new Response(null, { status: response.status });
    }
    return new Response("Method Not Allowed", { status: 405 });
};