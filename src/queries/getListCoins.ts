import axios from "axios";
import { coin } from "./getCoin";

export async function getListCoins(page: number = 0) {
    const { data: { coins } }: { data: {coins: coin[]} } = await axios.get(`https://api.coinstats.app/public/v1/coins?currency=RUB&skip=${page*10}&limit=10`) 
    return coins
}