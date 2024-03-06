import file from "../../assets/file.png";
import toTheMoon from "../../assets/toTheMoon.png";
import iButton from "../../assets/iButton.png";
import seventysix from "../../assets/76.png";

const cards = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt",
    desc: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    img: file,
    color: "#E8F4FD",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt",
    desc: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    img: toTheMoon,
    color: "#EBF9F4",
  },
];

function Sentiment() {
  return (
    <>
      <div className="mt-5 ">
        <div className="bg-white md:py-6 py-6 px-6 rounded-lg mt-5">
          <div className="flex">
            <h1 className="text-2xl font-bold mt-1">Sentiment</h1>
          </div>
          <div className="mt-2">
            <div className="flex gap-2">
              <h1 className="text-lg font-bold mt-1 text-[#44475B]">
                Key Events
              </h1>
              <img src={iButton} alt="" className="object-contain w-6 mt-1" />
            </div>

            <div className="mt-4">
              <div className="md:flex md:p-8 gap-4 space-y-6">
                {cards.map((card) => (
                  <div className={`bg-[${card.color}] rounded-xl py-6 px-4`}>
                    <div className="flex gap-4">
                      <img src={card.img} alt="" className="object-contain" />
                      <h1 className="font-bold text-sm">{card.name}</h1>
                    </div>
                    <div className="font-normal ml-16 text-sm">{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex gap-2">
                <h1 className="text-lg font-bold mt-1 text-[#44475B]">
                  Analyst Estimates
                </h1>
                <img src={iButton} alt="" className="object-contain w-6 mt-1" />
              </div>
              <div className="mt-8 flex md:gap-6 gap-4 text-[#7C7E8C]">
                <img src={seventysix} alt="" className="object-contain" />
                <div className="md:mt-6">
                  <div className="flex md:gap-4 gap-2">
                    <p className="">Buy</p>
                    <hr className="border-[3px] border-green-500 md:w-40 w-16 mt-3" />
                    <p>76%</p>
                  </div>
                  <div className="flex md:gap-4 gap-2">
                    <p>Hold</p>
                    <hr className="border-[3px] border-gray-300 md:w-12 w-6 mt-3" />
                    <p>8%</p>
                  </div>
                  <div className="flex md:gap-4 gap-2">
                    <p>Sell</p>
                    <hr className="border-[3px] border-red-500 md:w-40 w-14 mt-3" />
                    <p>16%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sentiment;
