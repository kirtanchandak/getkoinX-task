import { useState } from "react";
import redLine from "../../assets/redline.svg";
import smallRedLine from "../../assets/smallRedLine.svg";
import { performanceData } from "../../utils/data";
import { performanceLabels } from "../../utils/data";

function Performance() {
  const [activeLabel, setActiveLabel] = useState(0);
  const handleClick = (index, value) => {
    setActiveLabel(index);
  };

  return (
    <>
      <div className="">
        <div className="mt-5">
          <div className="flex md:gap-8 gap-6 py-2 overflow-x-auto">
            {performanceLabels.map((label, index) => (
              <button
                className={`text-gray-500 text-xs  font-semibold text-nowrap md:text-sm rounded-2xl focus:outline-none ${
                  activeLabel === index ? "text-[#0141CF]" : ""
                }`}
                onClick={() => handleClick(index)}
                key={label.index}
              >
                {label.name}
              </button>
            ))}
          </div>
          <hr className="border-2" />
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
                  {performanceData.map((item) => (
                    <div>
                      <div className="flex md:justify-between p-4 font-medium gap-8">
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
      </div>
    </>
  );
}

export default Performance;
