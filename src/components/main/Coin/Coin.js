import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  const { name, symbol, image } = coin;
  return (
    <Link to={`/coin-details/${coin.id}`}>
      <div className="py-6 px-4 shadow-lg w-[250px] rounded-lg grid grid-cols-2 ">
        <img src={image} alt="coinImage" className="h-16 w-16 rounded-full" />
        <div className="coin-info flex justify-center flex-col items-end">
          <p className="text-xl text-gray-500">{name}</p>
          <small className="text-gray-500">{symbol}</small>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
