import React, { useState, useEffect } from "react";
import axios from "axios";

import rightArrow from "../../assets/rightarrow.png";
import leftArrow from "../../assets/leftarrow.png";

function MoreCurrencies() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getTrendingCoins = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=${
            import.meta.env.VITE_GECKO_API_KEY
          }`
        );
        setCoins(res?.data?.coins);
        console.log(coins);
      } catch (err) {
        console.log(err);
      }
    };
    getTrendingCoins();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="md:px-20 px-6 mt-8 pb-20">
        <h1 className="text-xl font-bold">You May Also Like</h1>
        <div className="relative">
          <button onClick={slideLeft} className="z-10">
            <img
              src={leftArrow}
              className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 opacity-50 cursor-pointer hover:opacity-100 mt-4"
            />
          </button>
          <button onClick={slideRight} className="z-10">
            <img
              src={rightArrow}
              className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 opacity-50 cursor-pointer hover:opacity-100 mt-4"
            />
          </button>

          <div id="slider" className=" overflow-x-auto">
            <div className="flex gap-5">
              {coins.map((coin) => (
                <div
                  key={coin.coin_id}
                  className="relative border-2 border-[#E3E3E3] pl-4 pr-16 py-3 rounded-xl max-h-[132px]"
                >
                  <div className="flex gap-1">
                    <img
                      src={coin?.item?.thumb}
                      alt=""
                      className="w-6 object-contain"
                    />
                    <p className="text-lg font-semibold">
                      {coin?.item?.symbol}
                    </p>
                  </div>
                  <h2 className="font-semibold text-xl mt-1">
                    {coin?.item?.data?.price}
                  </h2>
                  <div className="flex items-center justify-center w-16 mt-3">
                    <img
                      src={coin?.item?.data?.sparkline}
                      alt=""
                      className="object-contain w-52"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreCurrencies;
