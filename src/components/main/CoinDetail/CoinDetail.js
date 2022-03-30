import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="my-20 mx-16 grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="info pl-2 text-start order-2 md:order-1 mt-8 md:mt-0">
        <h2 className="text-3xl font-semibold">General Info</h2>
        <hr />
        <p>Coin Name: {coin.name}</p>
        <p>Market Cap Rank: {coin.market_cap_rank}</p>
        <p>
          Origin: {coin.country_origin ? coin.country_origin : "Not Available"}
        </p>
        <p>Contract Address:{coin.contract_address}</p>
        <p>Hashing Algorithm: {coin.hashing_algorithm}</p>
        <p>Genesis Date: {coin.genesis_date}</p>
        <p>Last Updated: {coin.last_updated}</p>
        <h2 className="text-3xl mt-6 font-semibold">Scores</h2>
        <hr />
        <p>Community Score: {coin.community_score}</p>
        <p>Developer Score: {coin.developer_score}</p>
        <p>Liquidity Score: {coin.liquidity_score}</p>
        <p>Public Interest Score: {coin.public_interest_score}</p>
      </div>
      <div className="img flex justify-center items-center order-1 md:order-2">
        <img src={coin.image?.large} alt="coinImage" />
      </div>
    </div>
  );
};

export default CoinDetail;
