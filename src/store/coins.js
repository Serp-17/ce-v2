import {makeAutoObservable} from 'mobx';
import {getCoins} from '../api/coins';

class Coins {
    coins = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchCoins() {
        getCoins().then((data) => {
            this.coins = data.Data.map((coin) => {
                const obj = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    // price: coin.RAW.USD.PRICE.toFixed(3),
                    price: coin.RAW.USD.PRICE,
                    volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                };
                return obj;
            });
        })
    }
}

export default new Coins();