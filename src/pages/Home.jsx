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
import Tokenomics from "../components/Home/Tokenomics";
import { useParams } from "react-router-dom";

function Home() {
  const param = useParams();
  const slug = param?.slug;

  const [trendingCoins, setTrendingCoins] = useState([]);
  const [coinImg, setCoinImg] = useState("");
  const [coinSymbol, setCoinSymbol] = useState("");
  const [inrPrice, setInrPrice] = useState("");
  const [usdPrice, setUsdPrice] = useState("");
  const [coinName, setCoinName] = useState("");
  const [percentageChange, setPercentageChange] = useState("");

  useEffect(() => {
    const getUSDINRData = async () => {
      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?x_cg_api_key=3Be9SxR7dUMqAdoN2bR9f4qK`;
      const params = {
        ids: slug,
        vs_currencies: "inr,usd",
        include_24hr_change: "true",
      };
      try {
        const res = await axios.get(apiUrl, { params });
        console.log(res.data);
        setInrPrice(res?.data[slug]?.inr);
        setUsdPrice(res?.data[slug]?.usd);
        setPercentageChange(
          parseFloat(res?.data[slug]?.usd_24h_change).toFixed(2)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getUSDINRData();
  }, []);

  useEffect(() => {
    const getTrendingCoins = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=${
            import.meta.env.VITE_GECKO_API_KEY
          }`
        );
        setTrendingCoins(res.data.coins.slice(0, 3));
        console.log(trendingCoins);
      } catch (err) {
        console.log(err);
      }
    };
    getTrendingCoins();
  }, []);

  useEffect(() => {
    const getDynamicData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${slug}?x_cg_api_key=${
            import.meta.env.VITE_GECKO_API_KEY
          }`
        );

        console.log(res?.data);
        setCoinImg(res?.data?.image?.thumb);
        setCoinSymbol(res?.data?.symbol.toUpperCase());
        setCoinName(
          res?.data?.id.charAt(0).toUpperCase() + res?.data?.id.slice(1)
        );
        console.log(coinName);
      } catch (err) {
        console.log(err);
      }
    };
    getDynamicData();
  });

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
      <div className="lg:px-20 md:px-12 px-6 mt-8">
        <div>
          <p className="flex gap-2">
            <span className="text-[#3E5765]">Cryptocurrencies</span>{" "}
            <img src={before} alt="" className="object-contain" />
            <span className="font-semibold">{coinName}</span>
          </p>
        </div>
        <div className="md:flex mt-4 md:gap-6">
          <div className="md:w-3/4">
            <div className="bg-white md:py-6 py-1 px-8 rounded-lg">
              <div className="md:flex hidden">
                <div className="flex gap-8">
                  <div className="flex gap-3">
                    <img
                      src={coinImg}
                      alt="btc"
                      className="w-8 object-contain"
                    />
                    <h1 className="text-2xl font-bold mt-1">{coinName}</h1>
                    <p className="font-semibold text-gray-500">{coinSymbol}</p>
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
                    <h1 className="text-3xl font-bold">${usdPrice}</h1>
                    <p className="mt-[1px] font-medium text-md">₹{inrPrice}</p>
                  </div>
                  <div className="mt-1 flex gap-2">
                    <button className="bg-[#EBF9F4] text-[#14B079] rounded-md px-3 py-1 h-8 flex gap-2">
                      <img
                        src={polygon}
                        alt=""
                        className="object-contain mt-2"
                      />{" "}
                      {percentageChange}
                    </button>
                    <p className="md:mt-1 mt-[2px]">{"(24H)"}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="md:flex justify-between">
                    <p className="lg:text-xl text-sm font-bold">
                      {coinName} Price Chart ({coinSymbol})
                    </p>
                    <div className="flex lg:gap-5 mt-3 md:mt-0">
                      {timeline.map((timeline, index) => (
                        <button
                          key={index}
                          className={`lg:px-3 px-2 py-1 text-xs md:text-sm rounded-2xl focus:outline-none ${
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
                    <TradingViewWidget symbol={coinSymbol} />
                  </div>
                </div>
              </div>
            </div>
            <Performance />
            <Sentiment />
            <About />
            <Tokenomics />
            <Team />
          </div>
          <div className="md:w-3/12">
            <div className="bg-[#0052FE] p-6 text-white rounded-lg  mt-4 md:mt-0">
              <div className="text-center">
                <h1 className="text-xl font-bold leading-8">
                  Get Started with KoinX <br /> for FREE
                </h1>
                <p className="lg:px-8 leading-7 mt-3">
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
