import React from "react";
import tokoCircle from "../../assets/tokoCircle.png";

function Tokenomics() {
  return (
    <>
      <div className="md:flex hidden">
        <div className="md:py-6 py-6 px-6 mt-6 bg-white rounded-lg">
          <h1 className="text-2xl font-bold mt-1">Tokenomics</h1>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Initial Distribution</h2>
            <div className="md:flex mt-6 gap-14">
              <img src={tokoCircle} alt="" srcset="" />
              <div className="space-y-3 md:mt-12 mt-6">
                <div className="flex gap-2">
                  <div className="py-[9px] w-[21px] h-[20px] bg-[#0082FF] rounded-full"></div>
                  <p>Crowdsale investors: 80%</p>
                </div>
                <div className="flex gap-2">
                  <div className="py-[9px] w-[21px] h-[20px] bg-[#FAA002] rounded-full"></div>
                  <p>Foundation: 20%</p>
                </div>
              </div>
            </div>
            <p className="text-[#3E424A] font-medium mt-4">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh
              sodales massa habitasse urna felis augue. Gravida aliquam
              fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
              justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
              posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut.
              Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tokenomics;
