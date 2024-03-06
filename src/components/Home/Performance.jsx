import React from "react";
import redLine from "../../assets/redline.svg";
import smallRedLine from "../../assets/smallRedLine.svg";

function Performance() {
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

  const performanceDataLeft = [
    {
      id: 1,
      name: "Bitcoin Price",
      value: "$16,815.46",
    },
    {
      id: 2,
      name: "Market Cap",
      value: "$323,507,290,047",
    },
    {
      id: 3,
      name: "24h Low / 24h High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      id: 4,
      name: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      id: 5,
      name: "7d Low / 7d High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      id: 6,
      name: "Volume / Market Cap",
      value: "0.0718",
    },
    {
      id: 7,
      name: "Trading Volume",
      value: "$23,249,202,782",
    },
    {
      id: 8,
      name: "All-Time High",
      value: "$69,044.77 -75.6%",
    },
    {
      id: 9,
      name: "Market Cap Rank",
      value: "#1",
    },
    {
      id: 10,
      name: "All-Time Low",
      value: "$67.81 24729.1%",
    },
  ];

  return (
    <>
      <div className="mt-5 overflow-hidden">
        <div className="flex gap-8 py-2">
          {labels.map((label) => (
            <p key={label.id}>{label.name}</p>
          ))}
        </div>
        <hr />
        <div className="bg-white md:py-6 py-6 px-6 rounded-lg mt-5">
          <div className="flex">
            <h1 className="text-2xl font-bold mt-1">Performance</h1>
          </div>
          <div className="mt-6">
            <div className="flex md:gap-8 gap-6">
              <div className="">
                <p className="font-normal md:text-sm text-[#44475B] text-xs">
                  Today's High
                </p>
                <p className="font-medium">49,343.83</p>
              </div>
              <img src={redLine} alt="" className="md:flex hidden" />
              <img src={smallRedLine} alt="" className="w-20 md:hidden" />
              <div className="">
                <p className="font-normal md:text-sm text-[#44475B] text-xs">
                  Today's High
                </p>
                <p className="font-medium">49,343.83</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex md:gap-8 gap-6">
              <div className="">
                <p className="font-normal md:text-sm text-[#44475B] text-xs">
                  Today's High
                </p>
                <p className="font-medium">49,343.83</p>
              </div>
              <img src={redLine} alt="" className="md:flex hidden" />
              <img src={smallRedLine} alt="" className="w-20 md:hidden" />
              <div className="">
                <p className="font-normal md:text-sm text-[#44475B] text-xs">
                  Today's High
                </p>
                <p className="font-medium">49,343.83</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold mt-1">Fundamentals</h1>
            <div className="mt-6">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {performanceDataLeft.map((item) => (
                  <div>
                    <div className="flex md:justify-between pl-0 p-4 font-medium gap-8">
                      <p className=" text-[#768396] md:w-auto w-40">
                        {item.name}
                      </p>
                      <p className="text-xs text-right">{item.value}</p>
                    </div>
                    <hr className="border-[#D3E0E6]  border-[1px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Performance;
