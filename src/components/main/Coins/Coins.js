import React, { useEffect, useState } from "react";
import Coin from "../Coin/Coin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="w-max-7xl mx-12 mt-8">
      <h1 className="text-center text-4xl lg:text-5xl text-gray-500">
        Available Crypto Currencies
      </h1>
      <p className="text-xl text-center mt-6 mb-12 text-gray-500">
        Total coins:{coins.length}
      </p>
      <div className="coin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {coins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Coins;
