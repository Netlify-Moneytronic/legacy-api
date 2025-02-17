export default async (req: Request) => {
    //Fetch data from https://legacy-api.netlify.app/.netlify/functions/getData
    const url = "https://consumerapi.moneygram.com/services/capi/api/v1/sendMoney/feeLookup?senderCountry=USA&senderCurrency=USD&receiveCountry=GHA&sendAmount=100";
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(JSON.stringify(data));
    return new Response(JSON.stringify(data));
};