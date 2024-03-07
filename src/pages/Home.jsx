import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import bitcoin from "../assets/bitcoin.webp";
import TradingViewWidget from "../components/TradingViewWidget";
import Performance from "../components/Home/Performance";
import Sentiment from "../components/Home/Sentiment";
import About from "../components/Home/About";
import Team from "../components/Home/Team";
import illustration from "../assets/illustration.png";
import polygon from "../assets/polygon.png";
import MoreCurrencies from "../components/Home/MoreCurrencies";
import before from "../assets/__before.png";

function Home() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  //   useEffect(() => {
  //     const getResponse = async () => {
  //       const apiUrl = `https://api.coingecko.com/api/v3/simple/price?x_cg_api_key=3Be9SxR7dUMqAdoN2bR9f4qK`;
  //       const params = {
  //         ids: "bitcoin",
  //         vs_currencies: "inr,usd",
  //         include_24hr_change: "true",
  //       };
  //       try {
  //         const res = await axios.get(apiUrl, { params });
  //         console.log(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getResponse();
  //   }, []);

  // useEffect(() => {
  //   const getTrendingCoins = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=3Be9SxR7dUMqAdoN2bR9f4qK"
  //       );
  //       setTrendingCoins(res.data.coins.slice(0, 3));
  //       console.log(trendingCoins);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getTrendingCoins();
  // }, []);

  const timeline = [
    {
      id: 1,
      name: "1H",
    },
    {
      id: 2,
      name: "24H",
    },
    {
      id: 3,
      name: "7D",
    },
    {
      id: 4,
      name: "1M",
    },
    {
      id: 5,
      name: "3M",
    },
    {
      id: 6,
      name: "6M",
    },
    {
      id: 6,
      name: "1Y",
    },
    {
      id: 6,
      name: "ALL",
    },
  ];
  const [activeTimeline, setActiveTimeline] = useState(0);

  const handleClick = (index, value) => {
    setActiveTimeline(index);
  };

  return (
    <>
      <Navbar />
      <div className="md:px-20 px-6 mt-8">
        <div>
          <p className="flex gap-2">
            <span className="text-[#3E5765]">Cryptocurrencies</span>{" "}
            <img src={before} alt="" className="object-contain" />
            <span className="font-semibold">Bitcoin</span>
          </p>
        </div>
        <div className="md:flex mt-4 md:gap-6">
          <div className="md:w-3/4">
            <div className="bg-white md:py-6 py-1 px-8 rounded-lg">
              <div className="md:flex hidden">
                <div className="flex gap-8">
                  <div className="flex gap-3">
                    <img
                      src={bitcoin}
                      alt="btc"
                      className="w-8 object-contain"
                    />
                    <h1 className="text-2xl font-bold mt-1">Bitcoin</h1>
                    <p className="font-semibold text-gray-500">BTC</p>
                  </div>
                  <div>
                    <button className="p-2 bg-gray-500 text-white rounded-lg">
                      Rank #1
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex md:gap-16 gap-3">
                  <div>
                    <h1 className="text-3xl font-bold">$46,756</h1>
                    <p className="mt-[1px] font-medium text-md">Rs.23,45,678</p>
                  </div>
                  <div className="mt-1 flex gap-2">
                    <button className="bg-[#EBF9F4] text-[#14B079] rounded-md px-3 py-1 h-8 flex gap-2">
                      <img
                        src={polygon}
                        alt=""
                        className="object-contain mt-2"
                      />{" "}
                      2.51%
                    </button>
                    <p className="md:mt-1 mt-[2px]">{"(24H)"}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="md:flex justify-between">
                    <p className="md:text-xl text-sm font-bold">
                      Bitcoin Price Chart (USD)
                    </p>
                    <div className="flex md:gap-5 mt-3 md:mt-0">
                      {timeline.map((timeline, index) => (
                        <button
                          key={index}
                          className={`md:px-3 px-2 py-1 text-xs md:text-sm rounded-2xl focus:outline-none ${
                            activeTimeline === index
                              ? "bg-[#E2ECFE] text-[#0141CF]"
                              : ""
                          }`}
                          onClick={() => handleClick(index, timeline.value)}
                        >
                          {timeline.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <TradingViewWidget />
                  </div>
                </div>
              </div>
            </div>
            <Performance />
            <Sentiment />
            <About />
            <Team />
          </div>
          <div className="md:w-3/12">
            <div className="bg-[#0052FE] p-6 text-white rounded-lg  mt-4 md:mt-0">
              <div className="text-center">
                <h1 className="text-xl font-bold leading-8">
                  Get Started with KoinX <br /> for FREE
                </h1>
                <p className="px-8 leading-7 mt-3">
                  With our range of features that you can equip for free, KoinX
                  allows you to be more educated and aware of your tax reports.
                </p>
                <div className="flex items-center justify-center mt-8">
                  <img src={illustration} alt="" />
                </div>
                <button className="mt-6 bg-white text-black px-4 py-2 rounded-lg font-bold">
                  Get Started for FREE
                </button>
              </div>
            </div>
            <div className="bg-white mt-4 p-4 rounded-lg">
              <h1 className="font-bold text-lg">Trending Coins (24H)</h1>
              <div className="mt-3">
                {trendingCoins.map((coin) => (
                  <div key={coin.coin_id} className="flex justify-between p-3">
                    <div className="flex gap-2 mt-[3px]">
                      <img
                        src={coin?.item?.thumb}
                        alt=""
                        className="object-contain w-6"
                      />
                      <p className="font-bold">
                        {coin?.item?.name} ({coin?.item?.symbol})
                      </p>
                    </div>
                    <button className="bg-[#EBF9F4] text-[#14B079] rounded-md px-3 py-1 h-8 flex gap-2">
                      <img
                        src={polygon}
                        alt=""
                        className="object-contain mt-2"
                      />{" "}
                      2.51%
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MoreCurrencies />
      </div>
    </>
  );
}

export default Home;
