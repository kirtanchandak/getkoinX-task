import React, { useEffect, useRef, memo } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import bitcoin from "../assets/bitcoin.webp";
import TradingViewWidget from "../components/TradingViewWidget";
import redLine from "../assets/redline.svg";
import smallRedLine from "../assets/smallRedLine.svg";

function Home() {
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

  const timeline = [
    {
      id: 1,
      name: "1H",
      value: "D",
    },
    {
      id: 1,
      name: "24H",
      value: "W",
    },
  ];

  const labels = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Fundamentals",
    },
    {
      id: 3,
      name: "News Insights",
    },
    {
      id: 4,
      name: "Sentiments",
    },
    {
      id: 5,
      name: "Team",
    },
    {
      id: 6,
      name: "Technicals",
    },
    {
      id: 7,
      name: "Tokonomics",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="md:px-20 px-8 mt-8">
        <div>
          <p>Cryptocurrencies Bitcoin</p>
        </div>
        <div className="md:flex mt-4 gap-3">
          <div className="md:w-2/3 ">
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
                    <button className="bg-[#EBF9F4] text-[#14B079] rounded-sm px-3 h-7">
                      2.51%
                    </button>
                    <p className="md:mt-1 mt-[2px]">{"(24H)"}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between">
                    <p className="md:text-xl text-sm font-bold">
                      Bitcoin Price Chart (USD)
                    </p>
                    <div className="md:flex hidden gap-5">
                      {timeline.map((timeline) => (
                        <button>{timeline.name}</button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <TradingViewWidget value="D" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 overflow-hidden">
              <div className="flex gap-8 py-2">
                {labels.map((label) => (
                  <p key={label.id}>{label.name}</p>
                ))}
              </div>
              <hr />
              <div className="bg-white md:py-6 py-1 px-6 rounded-lg mt-5">
                <div className="flex">
                  <h1 className="text-2xl font-bold mt-1">Performance</h1>
                </div>
                <div className="mt-6">
                  <div className="flex md:gap-8 gap-4">
                    <div className="">
                      <p className="font-normal md:text-sm text-[#44475B] text-xs">
                        Today's High
                      </p>
                      <p className="">49,343.83</p>
                    </div>
                    <img src={redLine} alt="" className="md:flex hidden" />
                    <img src={smallRedLine} alt="" className="w-20 md:hidden" />
                    <div className="">
                      <p className="font-normal md:text-sm text-[#44475B] text-xs">
                        Today's High
                      </p>
                      <p className="">49,343.83</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex md:gap-8 gap-3">
                    <div className="">
                      <p className="font-normal text-sm text-[#44475B]">
                        Today's Low
                      </p>
                      <p>46,930.22</p>
                    </div>
                    <img src={redLine} alt="" className="md:flex hidden" />
                    <img src={smallRedLine} alt="" className="w-20 md:hidden" />
                    <div className="">
                      <p className="font-normal text-sm text-[#44475B]">
                        Today's High
                      </p>
                      <p>49,343.83</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>ok</div>
        </div>
      </div>
    </>
  );
}

export default Home;
