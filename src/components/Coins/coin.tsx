import './coin.css'

interface ICointPros {
    id: string;
    name: string;
    image: string;
    symbol: string;
    price: number;
    volume: number;
}

export const Coin = ({  id, name, image, symbol, price, index, priceChange }) => {
    return (
        <div className="coin">
            <div className="coin-info">
                <span className="coin-info-index">{index}</span>
                <div className="coin-info-image">
                    <img src={image} alt="" />
                </div>
                <div className="coin-info-description">
                    <span className="coin-info-description-name">{name}</span>
                    <span className="coin-info-description-symbol">{symbol}</span>
                </div>
            </div>
            <div className="coin-prices">
                <span className="coin-price-value">R$ {price}</span>
                {
                    priceChange.toFixed(2) < 0 ?
                    (<span className="coin-price-porcentage down">
                    {priceChange.toFixed(2)}
                </span>)
                    :
                    (<span className="coin-price-porcentage up">
                    +{priceChange.toFixed(2)}
                    </span>)
                }
                
                
            </div>
        </div>
    )
}