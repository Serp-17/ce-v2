import {makeAutoObservable} from 'mobx';
import {getCoins} from '../api/coins';

class Coins {
    coins = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchCoins() {
        getCoins().then((data) => {
            const coins = data.Data.map((coin) => {
                const obj = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE.toFixed(3),
                    volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                };
                return obj;
            });
            if (coins.length) {
                const data = coins.map((item) => ({
                    label: item.name,
                    name: item.name
                }))
                this.coins = data;
            }
        })
    }
}

export default new Coins();