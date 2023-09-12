import { coin } from "../queries/getCoin"

type props = {
    coin: coin
}

const BigCoin: React.FC<props> = ({coin}) => {
    return(
        <>
            <a href={coin.websiteUrl} target="_blank" className="BigCoin">
                <div className="BigCoin__name">
                    <img src={coin.icon} alt="" />
                    <h1>{coin.name}</h1>
                </div>
                <p className="BigCoin__price">{coin.price.toFixed(3)} &#8381;</p>
                <p>Last day: {coin.priceChange1d>0 ? <>🔺</> : <>🔻</>} {Math.abs(coin.priceChange1d)}</p>
            </a>
        </>    
    )
}
export default BigCoin