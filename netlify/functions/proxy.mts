export default async (req: Request) => {
    //Fetch data from https://legacy-api.netlify.app/.netlify/functions/getData
    const url = "https://legacy-api.netlify.app/.netlify/functions/getData";
    const response = await fetch(url);
    const data = await response.json();
    return new Response(JSON.stringify(data));
};