export default async () => {
    //Fetch data from https://legacy-api.netlify.app/.netlify/functions/getData
    const url = "https://q1consumerapi.qa.moneygram.com/services/capi/api/v1/sendMoney/feeLookup";
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'locale-header': 'en_US',
            'clientkey': process.env.CLIENT_KEY || ''
        }
    });
    console.log(response);
    const data = await response.json();
    console.log(JSON.stringify(data));
    return new Response(JSON.stringify(data));
};