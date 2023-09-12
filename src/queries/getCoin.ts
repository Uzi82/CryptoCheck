import axios from "axios";

export type coin = {
    availableSupply: number,
    contractAddress: string,
    decimals: number,
    exp: string[],
    icon: string,
    id: string,
    marketCap: number,
    name: string,
    price: number,
    priceBtc: number,
    priceChange1d: number,
    priceChange1h: number,
    priceChange1w: number,
    rank: number,
    symbol: string,
    totalSupply: number,
    twitterUrl: string,
    volume: number,
    websiteUrl: string
}

export async function getCoin(ids: string[] = ['bitcoin']) {
    let answer = []
    for(let id of ids) {
        const { data: {coin} }: { data: { coin: coin } } = await axios.get(`https://api.coinstats.app/public/v1/coins/${id}?currency=RUB`)
        answer.push(coin)
    }
    return answer
}