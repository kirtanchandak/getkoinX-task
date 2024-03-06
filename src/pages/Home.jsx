import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import bitcoin from "../assets/bitcoin.webp";
import TradingViewWidget from "../components/TradingViewWidget";
import Performance from "../components/Home/Performance";
import Sentiment from "../components/Home/Sentiment";

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

  return (
    <>
      <Navbar />
      <div className="md:px-20 px-6 mt-8">
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
            <Performance />
            <Sentiment />
          </div>
          <div>ok</div>
        </div>
      </div>
    </>
  );
}

export default Home;
